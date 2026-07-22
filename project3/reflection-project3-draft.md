# Project 3 Reflection (draft)

> Note to self: confirm the exact four reflection questions from the
> assignment instructions page (the rubric PDF only says "based on questions
> posed"). This draft answers the standard set: what the project demonstrates,
> the challenges I hit and how I resolved them, what I learned, and what I
> would carry forward. Paste into the Word doc, add the four validation
> screenshots (project3.html, preprocessing.html, index.html, and style.css),
> and remove this note before submitting. Move/keep this file out of the
> submission zip.

## Reflection (~300 words)

For Project 3 I built two new pages, a responsive design write-up on
project3.html and a preprocessing walkthrough on preprocessing.html, and
wired them into the site I already had. In my opinion the part that pulled
the project together was the SASS workflow, since it let me write the styles
as real source files and then compile them down to one plain stylesheet the
browser can read.

The first challenge I ran into was the compile step itself, because SASS is
not something the browser understands directly, so I had to run the Dart Sass
command line to turn my .scss files into css/style.css before anything showed
up. I also found that modern Dart Sass no longer wants the old division
slash, so I switched my px-to-rem function over to math.div, which cleared the
deprecation warning and taught me that even a preprocessor keeps evolving.

The second challenge was the hamburger menu, because a menu that only reacts
to a mouse leaves keyboard users stuck, so I used a small script that flips
aria-expanded on the button along with a class on the list. That way the same
control works whether someone clicks it or tabs to it, which keeps the
navigation accessible instead of just decorative.

The biggest thing I learned is how much responsive design depends on planning
the breakpoints ahead of time, so I stored my tablet and phone widths in a
SASS map and fed them into one media-query mixin. Overall, keeping the values
in one place made the two media queries easy to reason about, and it is a
habit I want to carry into Project 4.

## Validation screenshots to attach

- [ ] project3.html (validator.w3.org) (passing)
- [ ] preprocessing.html (validator.w3.org) (passing)
- [ ] index.html (validator.w3.org) (passing)
- [ ] style.css (jigsaw.w3.org/css-validator) (passing)

## Live URL

- Project 3: http://cmst386-umgc-ganderson58.azurewebsites.net/project3/project3.html
