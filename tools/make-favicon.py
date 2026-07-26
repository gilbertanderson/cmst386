"""Generate the Strikeworks Studio favicon.

Draws the lightning bolt from the header logo mark, white on the brand blue
rounded square, and writes a multi-size favicon.ico (16/32/48). The bolt is
rendered at 512px and downsampled so the diagonals come out antialiased
rather than jagged at tab size.

Usage:
    python3 tools/make-favicon.py
"""

from pathlib import Path

from PIL import Image, ImageDraw

BRAND_BLUE = (30, 58, 138)      # #1e3a8a, the header/footer blue
BOLT_WHITE = (255, 255, 255)

SUPERSAMPLE = 512
ICO_SIZES = [16, 32, 48]

OUT = Path(__file__).resolve().parent.parent / "project4" / "favicon.ico"
PREVIEW = Path("/tmp/favicon-preview.png")

# Lightning bolt outline in 0..1 space, matching the angle of the logo's bolt.
# Deliberately chunky: at 16px the diagonal arms need to land on 3-4 solid
# pixels each, or the bolt dissolves into gray antialiasing in the tab.
BOLT = [
    (0.72, 0.04),
    (0.20, 0.58),
    (0.42, 0.58),
    (0.30, 0.96),
    (0.82, 0.40),
    (0.58, 0.40),
]


def render(size):
    img = Image.new("RGB", (size, size), BRAND_BLUE)
    draw = ImageDraw.Draw(img)

    # Rounded square: modest radius so it still reads as a square at 16px.
    radius = int(size * 0.18)
    mask = Image.new("L", (size, size), 0)
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, size - 1, size - 1], radius, fill=255)

    draw.polygon([(x * size, y * size) for x, y in BOLT], fill=BOLT_WHITE)

    out = Image.new("RGB", (size, size), BRAND_BLUE)
    out.paste(img, (0, 0), mask)
    return out


def main():
    big = render(SUPERSAMPLE)
    frames = [big.resize((s, s), Image.LANCZOS) for s in ICO_SIZES]
    frames[0].save(OUT, format="ICO", sizes=[(s, s) for s in ICO_SIZES])

    # Side-by-side preview: actual 16px, plus 16px blown up to inspect legibility.
    strip = Image.new("RGB", (16 + 8 + 256, 256), (255, 255, 255))
    strip.paste(frames[0], (0, 0))
    strip.paste(frames[0].resize((256, 256), Image.NEAREST), (24, 0))
    strip.save(PREVIEW)

    print(f"wrote {OUT} ({', '.join(f'{s}x{s}' for s in ICO_SIZES)})")
    print(f"preview at {PREVIEW}")


if __name__ == "__main__":
    main()
