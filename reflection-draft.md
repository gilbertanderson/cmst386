# Project 1 Reflection

> **Note to self:** Add the four validation screenshots where marked and the
> live Aloft URL, then move/remove this file before zipping the project folder
> for submission (the reflection is submitted per the assignment instructions,
> not served as part of the site).

## Reflection (~400 words)

I haven't hit any real snags on this one yet since I'm still early in the
build, but if I put myself in the shoes of someone brand new to web
development, a few parts of this project stand out as places where things
could go wrong. The dropdown navigation is probably the biggest one, because
it looks simple in the sample screenshots but actually requires nesting an
unordered list inside a nav item and getting the CSS hover and focus states
right, and a beginner might get the hover working with a mouse while
forgetting that keyboard users need the dropdown to open on focus too, which
quietly breaks accessibility even though the page looks fine visually. File
paths are another likely trip-up, since the difference between a relative path
like images/photo.jpg and one written from the site root can make images or
CSS silently fail to load once the pages are nested inside folders like
cmst386/project1, and that kind of error doesn't throw anything obvious, it
just leaves a broken image icon with no real explanation. Image optimization
could trip people up as well, because resizing a photo in the browser with
width and height attributes isn't the same as actually reducing the file size
in GIMP, so the page loads slower than it should even though the thumbnail
looks the right size on screen. Meta tags are easy to forget entirely too,
since they don't render anywhere on the visible page, so it's the kind of
requirement that gets skipped by anyone who's just eyeballing the site instead
of checking the actual head markup. Beyond the code itself, the FTP and GitHub
deployment step introduces its own layer of confusion, because file
permissions on the Aloft server can look fine locally and still block the site
from being publicly visible, which usually means troubleshooting something a
beginner can't even see in their own text editor. Overall, most of the
friction in a project like this isn't really about writing HTML and CSS, it's
about the invisible layer underneath it, like accessibility states, correct
paths, file weight, and server permissions, that only becomes obvious once
something quietly breaks.

## Validation results

- [ ] index.html — W3C HTML validator screenshot: *(insert)*
- [ ] project1.html — W3C HTML validator screenshot: *(insert)*
- [ ] gallery.html — W3C HTML validator screenshot: *(insert)*
- [ ] style.css — W3C CSS (Jigsaw) validator screenshot: *(insert)*

## Live site

- Aloft URL: *(insert after upload, e.g., https://aloft.../~you/cmst386/)*
