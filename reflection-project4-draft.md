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

> **NEEDS YOUR EDIT.** The favicon changed after this paragraph was written.
> It is no longer an "SW" monogram; it is now the lightning bolt from the
> header logo mark, white on the brand blue rounded square, because the
> earlier version was the full STRIKEWORKS wordmark scaled down to 16x16
> and was unreadable in a browser tab. The "rounded square" and "site's
> primary blue" details below are still accurate. Rewrite the monogram
> part in your own words and I will drop it in verbatim.

For the favicon, I generated a simple rounded-square monogram reading "SW"
in the site's primary blue, since a plain initials mark is legible at the
tiny sizes a browser tab actually renders a favicon at, and it echoes the
same shape language as the header logo so the brand feels consistent
between the tab and the page itself.

## 2. How did you decide on the transition feature for this project? Do you feel it attracts the user or creates a distraction?

The CSS transition I am proudest of is on the case-study cards on the
portfolio and home pages, since hovering one lifts it slightly and adds a
soft shadow, which gives the whole grid a sense of depth without needing
any JavaScript to pull it off. I used the same background-color and
transform transition pattern on the buttons and nav links so hover
feedback feels consistent everywhere rather than different on every
component.

## 3. What challenges did you face in selecting a hero image for the background of your site? What steps did you take to mitigate these challenges?

> **WORTH A LOOK.** The prompt asks about challenges *selecting* the hero
> image. The paragraph below answers a challenge you hit *implementing* the
> hero. It is a real answer and it does describe mitigation, but if you want
> to cover the prompt head-on, a sentence or two up front about picking the
> image itself (licensing, resolution, keeping the headline readable over a
> busy photo) would close the gap. Your call; send me the words if so.

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

- [ ] Screenshot a contrast-checker tool (e.g. WebAIM Contrast Checker)
      showing: background color #ffffff, foreground color #1e293b (or
      #1e3a8a / #2563eb for headings and links), your chosen font size,
      and the resulting contrast ratio (all pairs already pass 4.5:1+).

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
