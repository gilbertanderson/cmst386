"""Capture the W3C validation and colour-contrast screenshots for the
Project 4 reflection.

Runs a VISIBLE Chromium with a persistent profile. The profile matters:
validator.w3.org sometimes puts a Cloudflare "verify you are human" gate in
front of results, and that gate is Gilbert's to click, not this script's to
work around. Once cleared, the clearance cookie is stored in the profile so
the remaining pages go through without asking again.

Outputs to project4/validation-screenshots/:
    html-<page>.png   x12   W3C Nu validator result per page
    css-style.png            W3C Jigsaw result for css/style.css
    contrast-<pair>.png x4   WebAIM contrast checker per colour pair

Usage:
    python3 -u tools/capture-validation-screenshots.py
"""

import sys
import time
from pathlib import Path
from urllib.parse import quote

from playwright.sync_api import sync_playwright

SITE = "https://cmst386-umgc-ganderson58.azurewebsites.net/project4"

PAGES = ["index", "about", "services", "portfolio", "case-nonprofit",
         "case-ecommerce", "case-startup", "testimonials", "blog",
         "blog-post-seo", "contact", "privacy"]

# Foreground / background / label. These are the pairs actually used by the
# Project 4 stylesheet, so the screenshots document real decisions.
CONTRAST_PAIRS = [
    ("1e293b", "ffffff", "body-text-on-white"),
    ("1e3a8a", "ffffff", "heading-on-white"),
    ("ffffff", "1e3a8a", "white-on-header-blue"),
    ("2563eb", "ffffff", "link-accent-on-white"),
]

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "project4" / "validation-screenshots"
PROFILE = ROOT / ".claude" / "playwright-profile"

GATE_SECONDS = 300


def gated(page):
    title = (page.title() or "").lower()
    return "just a moment" in title or "attention required" in title


def wait_out_gate(page, label):
    """Pause for a human to clear an interstitial. We never solve it."""
    if not gated(page):
        return True
    print(f"    >>> Bot check on screen for {label}.")
    print("    >>> Click the verification box in the Chromium window.")
    print("    >>> (Only needed once; the profile remembers it.)")
    deadline = time.time() + GATE_SECONDS
    while time.time() < deadline:
        time.sleep(2)
        if not gated(page):
            print("    >>> Cleared. Continuing.")
            time.sleep(2)
            return True
    print(f"    !!! Still gated after {GATE_SECONDS}s. Skipping {label}.")
    return False


def capture(page, url, dest, label, settle=1.5):
    page.goto(url, wait_until="domcontentloaded", timeout=90_000)
    if not wait_out_gate(page, label):
        return False
    try:
        page.wait_for_load_state("networkidle", timeout=30_000)
    except Exception:
        pass  # networkidle is a nicety, not a requirement
    time.sleep(settle)
    page.screenshot(path=str(dest), full_page=True)
    print(f"    saved {dest.name}")
    return True


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    PROFILE.mkdir(parents=True, exist_ok=True)
    saved, skipped = [], []

    with sync_playwright() as pw:
        ctx = pw.chromium.launch_persistent_context(
            str(PROFILE), headless=False, viewport={"width": 1280, "height": 900})
        page = ctx.pages[0] if ctx.pages else ctx.new_page()

        for name in PAGES:
            label = f"{name}.html"
            print(f"[html] {label}")
            ok = capture(page, f"https://validator.w3.org/nu/?doc={SITE}/{name}.html",
                         OUT / f"html-{name}.png", label)
            (saved if ok else skipped).append(label)

        print("[css] style.css")
        css_url = ("https://jigsaw.w3.org/css-validator/validator"
                   f"?uri={quote(SITE + '/css/style.css', safe='')}&profile=css3svg")
        ok = capture(page, css_url, OUT / "css-style.png", "style.css")
        (saved if ok else skipped).append("style.css")

        for fg, bg, label in CONTRAST_PAIRS:
            print(f"[contrast] {label}")
            url = f"https://webaim.org/resources/contrastchecker/?fcolor={fg}&bcolor={bg}"
            ok = capture(page, url, OUT / f"contrast-{label}.png", label)
            (saved if ok else skipped).append(f"contrast:{label}")

        ctx.close()

    print(f"\n{len(saved)} captured into {OUT}")
    if skipped:
        print(f"{len(skipped)} skipped: {', '.join(skipped)}")
        sys.exit(1)


if __name__ == "__main__":
    main()
