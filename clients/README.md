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

Bakery and Northstar sites are planned next, at roughly four to five pages each.

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
