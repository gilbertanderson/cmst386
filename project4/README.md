# Project 4: Strikeworks Studio

A 12-page portfolio site for **Strikeworks Studio**, a fictional one-person
UX studio run by Gilbert Anderson, built for CMST 386 Project 4. This
extends the freelance-portfolio plan from the Project 2 proposal, with the
"Ironwood Technology Charter School" nonprofit case study folded in as one
of the three client case studies rather than as its own separate site.

## Pages (12)

1. `index.html`, Home
2. `about.html`, About
3. `services.html`, Services
4. `portfolio.html`, Portfolio (links all 3 case studies + real CMST 386 coursework)
5. `case-nonprofit.html`, case study: Ironwood Technology Charter School
6. `case-ecommerce.html`, case study: Contreras Family Bakery
7. `case-startup.html`, case study: Northstar Analytics
8. `testimonials.html`, Testimonials
9. `blog.html`, Blog index
10. `blog-post-seo.html`, blog post (the required sample post)
11. `contact.html`, Contact, with the graded web form
12. `privacy.html`, Privacy Policy (footer-only, not in main nav; 400+ words, all 4 required areas)

## Stack

Hand-authored HTML5 + CSS3 (`css/style.css`), no preprocessor (this
project's rubric does not require SASS/LESS; that was Project 3's
requirement), no frameworks. Font Awesome loaded via its official CDN.
Vanilla JavaScript (`js/script.js`) for the footer date/time, the mobile
nav toggle, and the contact form validation.

## Sitemap

Per the rubric's wording ("XML Sitemap generated via online sitemap
generator tool ... copied precisely from the sitemap generator tool
output"), `sitemap.xml` is produced by running the live site through
https://www.xml-sitemaps.com/ and committing the downloaded output
exactly as generated. If pages are ever added, renamed, or removed,
re-run the crawl against the live URL and replace the file.

## What's already done

- All 12 pages validate with the W3C HTML and CSS3 validators (see below).
- Every color/background pair is verified at 4.5:1 contrast or better
  (computed with the WCAG relative-luminance formula before any code was
  written).
- Main nav (7 items, identical on every page): Home, About, Services,
  Portfolio, Testimonials, Blog, Contact. Privacy Policy is footer-only.
- Site search: a DuckDuckGo site-scoped search form in the footer of all
  12 pages (the assignment's required search function).
- Hero image, 2+ linked images (the 3 case-study thumbnails) and 2+
  non-linked images (hero, headshot, avatars, blog header), all hosted
  locally in `images/`, all with descriptive alt text.
- 4+ Font Awesome icons, styled via this project's own CSS.
- One relevant CSS transition (nav links, buttons, case-study cards).
- Contact form: text input, email input, textarea, select list, radio
  buttons, a checkbox, submit button; `fieldset`/`legend`; `label` +
  `tabindex` on every control; placeholder hints; non-white field
  background; mailto submission; two required fields marked with an
  asterisk; JavaScript validation that blocks submission and shows an
  inline message if name/email are missing or invalid.
- Footer date/time on all 12 pages, auto-displayed on load, no button.
- SEO meta tags (description, keywords, robots, author, copyright) and a
  unique `<title>` on every page; one `<h1>` and logical `h2`-`h6` order
  everywhere, with a 25+ word intro under every `<h1>`.
- The favicon (`favicon.ico`) is a deliberate mark, not a placeholder: the
  lightning bolt from the header logo, white on the brand blue, at 16, 32,
  and 48 pixels. An earlier version was the full wordmark scaled down and
  was illegible in a browser tab.
- Photography is still generated placeholder imagery; see `images/README.txt`
  for what to swap in later.

## Remaining manual steps (yours, not automatable)

- [ ] **Color contrast analyzer screenshot**: the rubric wants you to
      personally demonstrate picking a background color, foreground color,
      font size, and contrast ratio using a contrast-checker tool (e.g.
      WebAIM's Contrast Checker) for your reflection. The palette already
      passes; you just need the screenshot showing you checked it.
- [ ] **Validation screenshots**: all 12 pages + `css/style.css`, same
      process as Projects 1 and 3.
- [ ] **Reflection**: a full draft answering the four confirmed prompts
      lives at the repo root (`reflection-project4-draft.md`), kept out of
      this folder on purpose so it never ships in the submission zip.
      Paste it into the Word doc with the screenshots and the sitemap XML.
- [ ] **Real photos**: swap the generated placeholder images per
      `images/README.txt` if you want real photography instead of
      illustrations.
- [ ] **Aloft upload**: upload this folder to the Aloft server, set
      file/folder permissions, and submit the working URL in LEO along
      with the zip.

## Rubric decisions worth knowing about

- **Topic**: combines your Project 2 proposal (Gilbert Anderson Design,
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
- **Search function**: the assignment offers DuckDuckGo, Google CSE, or
  FreeFind; the DuckDuckGo search box needs no account or embed script,
  so it keeps the site free of third-party JavaScript.
