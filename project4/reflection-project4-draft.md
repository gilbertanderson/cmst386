# Project 4 Reflection (draft)

> Note to self: the rubric PDF only says "based on questions posed" without
> listing the actual questions, and the exact prompts live on the
> assignment instructions page, not the rubric. This draft answers what the
> earlier build brief guessed the four prompts were (favicon choice, the
> CSS transition, a challenge building the hero, and a challenge a beginner
> might face) — confirm the real wording before submitting. Paste the final
> version into your Word doc with the 12 HTML validation screenshots + the
> CSS validation screenshot + your regenerated XML sitemap, then delete
> this file. Don't ship this file in your submission zip.

## Reflection (~370 words)

For Project 4 I built a 12-page portfolio site for Strikeworks Studio, a
fictional one-person UX studio, which extends the plan from my Project 2
proposal rather than starting from a blank page. In my opinion the biggest
structural decision was folding the Ironwood Technology Charter School
brief in as one of the three case studies instead of building it as its
own separate site, since that kept the whole project consistent with what
I had already proposed and graded in Project 2.

For the favicon, I generated a simple rounded-square monogram reading "SW"
in the site's primary blue, since a plain initials mark is legible at the
tiny sizes a browser tab actually renders a favicon at, and it echoes the
same shape language as the header logo so the brand feels consistent
between the tab and the page itself.

The CSS transition I am proudest of is on the case-study cards on the
portfolio and home pages, since hovering one lifts it slightly and adds a
soft shadow, which gives the whole grid a sense of depth without needing
any JavaScript to pull it off. I used the same background-color and
transform transition pattern on the buttons and nav links so hover
feedback feels consistent everywhere rather than different on every
component.

The hero section gave me the most trouble. My first version absolutely
positioned the dark color overlay directly over a fixed-height image, and
once I wrote a long enough headline, the text overflowed past the bottom
of that box and spilled onto the plain white background below it, which
looked broken. I fixed it by flipping the layering: the image is now the
one that is absolutely positioned to fill its container, while the overlay
sits in normal document flow with a minimum height, so the section can
grow taller if the headline wraps onto more lines instead of clipping.

If I had to guess where a newer developer gets stuck on a project like
this, it is the sheer number of files that all need to stay identical in
one place, meaning the header, nav, and footer markup, since one typo in a
copied-and-pasted nav item breaks consistency across every single page
instead of just one. That is really the same lesson Project 2's proposal
already predicted before I ever wrote a line of this site: plan the shared
template first, then let every page inherit from it, rather than building
pages one at a time and hoping they stay in sync.

## Validation screenshots to attach

- [ ] index.html
- [ ] about.html
- [ ] services.html
- [ ] portfolio.html
- [ ] case-nonprofit.html
- [ ] case-ecommerce.html
- [ ] case-startup.html
- [ ] testimonials.html
- [ ] blog.html
- [ ] blog-post-seo.html
- [ ] contact.html
- [ ] privacy.html
- [ ] css/style.css (Jigsaw CSS validator)

## Color contrast analyzer

- [ ] Screenshot a contrast-checker tool (e.g. WebAIM Contrast Checker)
      showing: background color #ffffff, foreground color #1e293b (or
      #1e3a8a / #2563eb for headings and links), your chosen font size,
      and the resulting contrast ratio (all pairs already pass 4.5:1+).

## XML Sitemap

- [x] `sitemap.xml` is now auto-regenerated on every deploy by
      `generate-sitemap.mjs` (see project4/README.md), so it always matches
      the real page list.
- [ ] Paste the live `sitemap.xml` content here (or run it once more
      through https://www.xml-sitemaps.com/ against the live URL if you
      prefer that as your documented source, per the rubric's wording).

## Live URL

- Project 4: http://cmst386-umgc-ganderson58.azurewebsites.net/project4/index.html
