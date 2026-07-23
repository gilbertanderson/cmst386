# Project 4 — Strikeworks Studio

A 12-page portfolio site for **Strikeworks Studio**, a fictional one-person
UX studio run by Gilbert Anderson, built for CMST 386 Project 4. This
extends the freelance-portfolio plan from the Project 2 proposal, with the
"Ironwood Technology Charter School" nonprofit case study folded in as one
of the three client case studies rather than as its own separate site.

## Pages (12)

1. `index.html` — Home
2. `about.html` — About
3. `services.html` — Services
4. `portfolio.html` — Portfolio (links all 3 case studies + real CMST 386 coursework)
5. `case-nonprofit.html` — Case study: Ironwood Technology Charter School
6. `case-ecommerce.html` — Case study: Contreras Family Bakery
7. `case-startup.html` — Case study: Northstar Analytics
8. `testimonials.html` — Testimonials
9. `blog.html` — Blog index
10. `blog-post-seo.html` — Blog post (the required sample post)
11. `contact.html` — Contact, with the graded web form
12. `privacy.html` — Privacy Policy (footer-only, not in main nav; 400+ words, all 4 required areas)

## Stack

Hand-authored HTML5 + CSS3 (`css/style.css`), no preprocessor (this
project's rubric does not require SASS/LESS — that was Project 3's
requirement), no frameworks. Font Awesome loaded via its official CDN.
Vanilla JavaScript (`js/script.js`) for the footer date/time and the
contact form validation.

## Sitemap generation

`sitemap.xml` is no longer hand-maintained. `generate-sitemap.mjs` (zero
dependencies, plain Node) scans this folder for `*.html` files and rebuilds
`sitemap.xml` from what's actually there, using each file's real modified
time for `<lastmod>`. It runs automatically as a "Regenerate Project 4
sitemap" step in `.github/workflows/main.yml`, right before every deploy,
so the sitemap can't silently drift out of sync as pages are added,
renamed, or removed.

To run it by hand:

```bash
cd project4
node generate-sitemap.mjs
# or with a custom base URL:
node generate-sitemap.mjs --base https://example.com/project4/
```

Per-page `changefreq`/`priority` values live in the `RULES` map near the
top of the script.

## What's already done

- All 12 pages validate with the W3C HTML and CSS3 validators (see below).
- Every color/background pair is verified ≥4.5:1 contrast (computed with
  the WCAG relative-luminance formula before any code was written).
- Main nav (7 items, identical on every page): Home, About, Services,
  Portfolio, Testimonials, Blog, Contact. Privacy Policy is footer-only.
- Hero image, ≥2 linked images (the 3 case-study thumbnails) and ≥2
  non-linked images (hero, headshot, avatars, blog header), all hosted
  locally in `images/`, all with descriptive alt text.
- 4+ Font Awesome icons, styled via this project's own CSS.
- One relevant CSS transition (nav links, buttons, case-study cards).
- Contact form: text input, email input, textarea, select list, radio
  buttons, submit button; `fieldset`/`legend`; `label` + `tabindex` on every
  control; non-white field background; mailto submission; one required
  field marked with an asterisk; JavaScript validation that blocks
  submission and shows an inline message if name/email are missing/invalid.
- Footer date/time on all 12 pages, auto-displayed on load, no button.
- SEO meta tags (description, keywords, robots, author, copyright) and a
  unique `<title>` on every page; one `<h1>` and logical `h2`–`h6` order
  everywhere.
- A starter `sitemap.xml` covering all 12 pages, pointed at the real Azure
  URL this site deploys to.
- Placeholder favicon (`favicon.ico`) and images generated locally so the
  site is complete and submittable as-is; see `images/README.txt` for what
  to swap in later.

## Remaining manual steps (yours, not automatable)

- [ ] **Color contrast analyzer screenshot** — the rubric wants you to
      personally demonstrate picking a background color, foreground color,
      font size, and contrast ratio using a contrast-checker tool (e.g.
      WebAIM's Contrast Checker) for your reflection. The palette already
      passes; you just need the screenshot showing you checked it.
- [x] **XML sitemap** — now auto-regenerated on every deploy by
      `generate-sitemap.mjs` (see below), so it's always in sync with
      whatever pages actually exist. For your reflection, either screenshot
      the live `sitemap.xml` this produces, or run it once more through
      https://www.xml-sitemaps.com/ against the live URL — the rubric
      accepts either, and the generated one has the advantage of being
      version-controlled and regenerated automatically instead of going
      stale.
- [ ] **Real photos** — swap the generated placeholder images per
      `images/README.txt` if you want real photography instead of
      illustrations.
- [ ] **Validation screenshots** — all 12 pages + `css/style.css`, same
      process as Projects 1 and 3.
- [ ] **Reflection** — confirm the exact reflection questions from the
      assignment page (rubric only says "questions posed"); a draft is
      not yet written for Project 4 — ask for one if you want a starting
      point in your voice.

## Rubric decisions worth knowing about

- **Topic**: combines your Project 2 proposal (Gilbert Anderson Design /
  now Strikeworks Studio, a UX studio) with the separate Ironwood brief by
  using Ironwood as the nonprofit case study rather than building it as its
  own 10-page site.
- **No SASS**: this rubric's CSS3 criterion only requires a single external
  stylesheet; it does not mention a preprocessor, unlike Project 3.
- **Privacy policy word count**: written to 400+ words covering all four
  required areas (Collection, Usage, Third-Party, Cookies), well past the
  250-word Excellent-tier minimum.
- **12 pages, not 10**: two extra pages (`contact.html` as its own page,
  and `privacy.html`) were added beyond the Project 2 proposal's original
  10-page list, since the proposal named "Contact" in its nav without ever
  listing a dedicated Contact page, and the actual rubric requires Privacy
  Policy to be its own standalone page. Having more than the required
  minimum of 10 pages does not violate the rubric.
