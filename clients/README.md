# Client sites

Working sites for the three fictional clients whose projects are written up as
case studies in Project 4. Each case study links here from its Result section,
so a reader can go from the write-up to the thing that was actually built.

These are **deliberately outside `project4/`**. Project 4 is graded as a
12-page site whose `sitemap.xml` must stay byte-exact xml-sitemaps.com output,
and adding pages inside that folder would invalidate both. Nothing in here
affects the Project 4 page count, sitemap, or robots.txt.

## Sites

| Folder | Client | Pages | Linked from |
|---|---|---|---|
| `ironwood/` | Ironwood Technology Charter School | 10 | `project4/case-nonprofit.html`, `project4/testimonials.html` |
| `bakery/` | Contreras Family Bakery | 5 | `project4/case-ecommerce.html`, `project4/testimonials.html` |
| `northstar/` | Northstar Analytics | 1 | `project4/case-startup.html`, `project4/testimonials.html` |

Each site has its own brand palette, stylesheet, and favicon. All three were
contrast-checked before any CSS was written.

## Contreras Family Bakery

Five pages: Home, Menu, Order, About, Visit. Delivers what the case study
claims: a menu with photos and real prices, and a structured order page with a
pickup date picker, a cake-size select, and a notes field routed to email rather
than a shopping cart. The order form additionally enforces the bakery's real
72-hour lead time in JavaScript, so an impossible pickup date cannot be
submitted.

## Northstar Analytics

**One page, deliberately.** The case study says the founders needed "a single,
clear landing page rather than a multi-page marketing site," so building this as
four or five pages would have contradicted the write-up. It has the headline,
feature section, pricing preview, and repeated waitlist call to action the case
study describes.

The case study also mentions light interactivity, "a hover state on a chart
element." That is the sample weekly chart. The bars are real `<button>`
elements rather than styled divs, so they respond to hover, click, and keyboard
focus alike, and the readout is a `role="status"` region so the figure is
announced without stealing focus.

## Ironwood

A tuition-free public charter school in Austin with paired technology and
skilled-trades tracks. The page list follows the original Ironwood project
reflection: Home, About, Academics, Admissions, Faculty, Events, Contact,
Support Us, FAQ, Privacy Policy. Seven of those sit in the main navigation;
Support, FAQ, and Privacy live in the footer.

The content delivers on what the case study claims: two clearly labeled tracks
rather than one undifferentiated course list, a work-based learning pipeline
described as a graduation requirement, dual-enrollment credit through Austin
Community College with a University of Texas at Austin bridge pathway, and the
partner employers named in the case study.

### Accessibility (Section 508 / WCAG AA)

Built to 508 from the start rather than retrofitted:

- Every foreground and background pair was run through a contrast check before
  any CSS was written. The lowest ratio used anywhere is **6.70:1**, against a
  4.5:1 requirement.
- Skip-to-content link as the first focusable element on every page.
- A visible `:focus-visible` outline on every interactive element. No outlines
  are suppressed anywhere in the stylesheet.
- One `h1` per page, headings in order with no skipped levels.
- Descriptive `alt` on all 14 images. No empty or filler alt text.
- Data tables use `<caption>`, `<thead>`, and `scope` on every header cell.
- The form uses `fieldset`/`legend`, a `label` for every control, sequential
  `tabindex`, and validation messages in `role="alert"` regions so they are
  announced, not just shown.
- Track cards carry a colour bar, but each track is also named in its heading,
  so nothing depends on colour alone.
- The mobile menu closes on Escape and returns focus to its button.

### Stack

Hand-authored HTML5 and CSS3, one external stylesheet, vanilla JS for the
footer clock, the responsive nav, and form validation. `script.js` loads from
`<head>` with `defer`, so handlers are attached before the header is
interactive. Font Awesome is not used here; the school brand does not need it.

`build_ironwood.py` in the session scratchpad stamped the shared header, nav,
and footer into the nine pages after `index.html` was written by hand, so the
chrome is provably identical across all ten. Page content was written
individually.

### Validation

All 10 pages: **0 errors, 0 warnings** (W3C Nu). `css/styles.css`: **0 errors**
(W3C Jigsaw, CSS3 + SVG profile).
