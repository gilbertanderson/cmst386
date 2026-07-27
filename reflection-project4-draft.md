# Project 4 Reflection (draft)

> Note to self: this file lives at the repo root on purpose so it never ships
> inside the project4 folder or the submission zip. Paste the final version
> into your Word doc with the 12 HTML validation screenshots, the CSS
> validation screenshot, the contrast-analyzer screenshot, and the XML
> sitemap, then submit.
>
> Structure below follows the four official prompts in order, so the grader
> can map each answer to its question. Your prose is unchanged except where
> flagged with NEEDS YOUR EDIT.

**Project 4: Final Website Project Reflection**
CMST 386: Principles of Web Design and Technology II
Student: Gilbert Anderson
Website: Strikeworks Studio
URL: https://cmst386-umgc-ganderson58.azurewebsites.net/project4/index.html

## Overview

For Project 4 I built a 12-page portfolio site for Strikeworks Studio, a
fictional one-person UX studio, which extends the plan from my Project 2
proposal rather than starting from a blank page. In my opinion the biggest
structural decision was folding the Ironwood Technology Charter School
brief in as one of the three case studies instead of building it as its
own separate site, since that kept the whole project consistent with what
I had already proposed and graded in Project 2.

## 1. Developing a favicon that is relevant can be challenging, what did you choose to use for a favicon and why?

> **DRAFTED FOR YOUR REVIEW.** The old paragraph described an "SW" monogram,
> which is not what is deployed. Rewritten below to describe the actual
> favicon and to keep the legibility reasoning you already had. Change
> anything that does not sound like you.

For the favicon I ended up using the lightning bolt from the Strikeworks
header logo, white on a rounded square in the site's primary blue. My first
attempt was the full STRIKEWORKS wordmark scaled down, and it turned into an
unreadable smudge at the sixteen pixels a browser tab actually gives you,
which taught me that a favicon is not really a shrunken logo so much as a
separate piece of design work with its own constraints. A single bold shape
survives that size in a way lettering does not. Because the bolt already
sits inside the wordmark as the letter I, the tab still reads as the same
brand rather than as some unrelated icon, so I got the legibility without
giving up the consistency between the tab and the page itself.

## 2. How did you decide on the transition feature for this project? Do you feel it attracts the user or creates a distraction?

The CSS transition I am proudest of is on the case-study cards on the
portfolio and home pages, since hovering one lifts it slightly and adds a
soft shadow, which gives the whole grid a sense of depth without needing
any JavaScript to pull it off. I used the same background-color and
transform transition pattern on the buttons and nav links so hover
feedback feels consistent everywhere rather than different on every
component.

## 3. What challenges did you face in selecting a hero image for the background of your site? What steps did you take to mitigate these challenges?

> **OPENING DRAFTED FOR YOUR REVIEW.** The prompt asks about challenges
> *selecting* the hero image, so the first paragraph below is new and covers
> that. Your original paragraph follows it unchanged as the implementation
> half of the answer.

Choosing the hero image itself came with constraints before I wrote any
markup. I wanted something that suggested focused design work without
looking like generic stock photography, it had to be licensed in a way I
could actually publish for a coursework project, and it had to stay dark and
uncluttered enough through the middle that white headline text sitting on
top of it would still clear the 4.5:1 contrast minimum. That last one is
what drove the decision. Rather than hunting for a photograph that happened
to be dark in exactly the right region, I committed to a semi-transparent
dark overlay between the image and the text, which let me choose the image
on composition alone and guarantee the contrast independently of whatever
was in the picture.

The hero section gave me the most trouble. My first version absolutely
positioned the dark color overlay directly over a fixed-height image, and
once I wrote a long enough headline, the text overflowed past the bottom
of that box and spilled onto the plain white background below it, which
looked broken. I fixed it by flipping the layering: the image is now the
one that is absolutely positioned to fill its container, while the overlay
sits in normal document flow with a minimum height, so the section can
grow taller if the headline wraps onto more lines instead of clipping.

## 4. What do you think are some issues or challenges someone new to creating web pages might face completing a project like this?

If I had to guess where a newer developer gets stuck on a project like
this, it is the sheer number of files that all need to stay identical in
one place, meaning the header, nav, and footer markup, since one typo in a
copied-and-pasted nav item breaks consistency across every single page
instead of just one. That is really the same lesson Project 2's proposal
already predicted before I ever wrote a line of this site: plan the shared
template first, then let every page inherit from it, rather than building
pages one at a time and hoping they stay in sync.

## Validation screenshots to attach

All 13 were confirmed clean through the validators' APIs on the live site:
12 HTML pages at 0 errors and 0 warnings, and the stylesheet at 0 errors
(1 warning, a vendor-prefix notice on the system font stack).

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

Four WebAIM Contrast Checker screenshots are attached, one per colour pair,
each showing the selected background colour, the selected foreground colour,
and the resulting ratio. Font sizes are noted in each caption.

All ten text pairs used on the site were computed and every one passes:

| Ratio | Pair | Used for |
|---|---|---|
| 5.02:1 | #b45309 on #ffffff | Service prices, required-field asterisks |
| 5.17:1 | #2563eb on #ffffff | h3 headings, links, icons |
| 5.17:1 | #ffffff on #2563eb | Button text on the accent colour |
| 7.29:1 | #bfdbfe on #1e3a8a | Nav links in the header |
| 7.58:1 | #475569 on #ffffff | Muted body text |
| 8.72:1 | #ffffff on #1e40af | Nav hover, footer social icons |
| 10.36:1 | #1e3a8a on #ffffff | h2 headings |
| 10.36:1 | #ffffff on #1e3a8a | Header, footer, and CTA band text |
| 13.44:1 | #1e293b on #eff6ff | Form field text on pale blue |
| 14.63:1 | #1e293b on #ffffff | Body text |

The lowest ratio on the site is 5.02:1, comfortably above the 4.5:1 the
rubric requires for normal text.

## XML Sitemap

- [x] `sitemap.xml` was generated by running the live site through
      https://www.xml-sitemaps.com/ (crawled July 26, 2026; 14 URLs
      indexed) and the tool's output is committed exactly as downloaded,
      per the rubric's wording ("copied precisely from the sitemap
      generator tool output").
- [x] Generated sitemap content, for pasting into the Word doc:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/css" href="https://www.xml-sitemaps.com/css/sitemap.css"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">

  <url>
       <loc>https://cmst386-umgc-ganderson58.azurewebsites.net/project4/</loc>
       <lastmod>2026-07-26T01:22:32+00:00</lastmod>
       <changefreq>daily</changefreq>
       <priority>1.0000</priority>
  </url>
  <url>
       <loc>https://cmst386-umgc-ganderson58.azurewebsites.net/project4/index.html</loc>
       <lastmod>2026-07-26T01:22:32+00:00</lastmod>
       <changefreq>daily</changefreq>
       <priority>0.8000</priority>
  </url>
  <url>
       <loc>https://cmst386-umgc-ganderson58.azurewebsites.net/project4/about.html</loc>
       <lastmod>2026-07-26T01:22:32+00:00</lastmod>
       <changefreq>daily</changefreq>
       <priority>0.8000</priority>
  </url>
  <url>
       <loc>https://cmst386-umgc-ganderson58.azurewebsites.net/project4/services.html</loc>
       <lastmod>2026-07-26T01:22:32+00:00</lastmod>
       <changefreq>daily</changefreq>
       <priority>0.8000</priority>
  </url>
  <url>
       <loc>https://cmst386-umgc-ganderson58.azurewebsites.net/project4/portfolio.html</loc>
       <lastmod>2026-07-26T01:22:32+00:00</lastmod>
       <changefreq>daily</changefreq>
       <priority>0.8000</priority>
  </url>
  <url>
       <loc>https://cmst386-umgc-ganderson58.azurewebsites.net/project4/testimonials.html</loc>
       <lastmod>2026-07-26T01:22:32+00:00</lastmod>
       <changefreq>daily</changefreq>
       <priority>0.8000</priority>
  </url>
  <url>
       <loc>https://cmst386-umgc-ganderson58.azurewebsites.net/project4/blog.html</loc>
       <lastmod>2026-07-26T01:22:32+00:00</lastmod>
       <changefreq>daily</changefreq>
       <priority>0.8000</priority>
  </url>
  <url>
       <loc>https://cmst386-umgc-ganderson58.azurewebsites.net/project4/contact.html</loc>
       <lastmod>2026-07-26T01:22:32+00:00</lastmod>
       <changefreq>daily</changefreq>
       <priority>0.8000</priority>
  </url>
  <url>
       <loc>https://cmst386-umgc-ganderson58.azurewebsites.net/project4/case-nonprofit.html</loc>
       <lastmod>2026-07-26T01:22:32+00:00</lastmod>
       <changefreq>daily</changefreq>
       <priority>0.8000</priority>
  </url>
  <url>
       <loc>https://cmst386-umgc-ganderson58.azurewebsites.net/project4/case-ecommerce.html</loc>
       <lastmod>2026-07-26T01:22:32+00:00</lastmod>
       <changefreq>daily</changefreq>
       <priority>0.8000</priority>
  </url>
  <url>
       <loc>https://cmst386-umgc-ganderson58.azurewebsites.net/project4/case-startup.html</loc>
       <lastmod>2026-07-26T01:22:32+00:00</lastmod>
       <changefreq>daily</changefreq>
       <priority>0.8000</priority>
  </url>
  <url>
       <loc>https://cmst386-umgc-ganderson58.azurewebsites.net/project4/sitemap.xml</loc>
       <lastmod>2026-07-26T01:22:36+00:00</lastmod>
       <changefreq>daily</changefreq>
       <priority>0.8000</priority>
  </url>
  <url>
       <loc>https://cmst386-umgc-ganderson58.azurewebsites.net/project4/blog-post-seo.html</loc>
       <lastmod>2026-07-26T01:22:32+00:00</lastmod>
       <changefreq>daily</changefreq>
       <priority>0.8000</priority>
  </url>
  <url>
       <loc>https://cmst386-umgc-ganderson58.azurewebsites.net/project4/privacy.html</loc>
       <lastmod>2026-07-26T01:22:32+00:00</lastmod>
       <changefreq>daily</changefreq>
       <priority>0.8000</priority>
  </url>
</urlset>
```

## Live URL

- Project 4: https://cmst386-umgc-ganderson58.azurewebsites.net/project4/index.html
