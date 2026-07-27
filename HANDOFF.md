# Handoff notes

This file used to carry the Project 2 handoff, describing an unpushed commit and
a 10-page plan for Project 4. All of that is long done and the details had gone
stale, so it has been replaced with a pointer to the things that are actually
kept current.

## Where state lives now

- **[README.md](README.md)** is the accurate overview: what each project is,
  where the client sites live, how deployment works, and both hostnames.
- **[project4/README.md](project4/README.md)** documents the Project 4 rubric
  decisions, including why it is 12 pages rather than 10 and why `sitemap.xml`
  must not be regenerated.
- **[clients/README.md](clients/README.md)** covers the three client sites and
  their accessibility work.
- **[tools/cloudflare-worker/README.md](tools/cloudflare-worker/README.md)**
  explains the reverse proxy serving `gilbertanderson.com`.

## Current state, July 2026

All four projects are built, deployed, and validating clean. Project 4 is 12
pages at `project4/`, live at
`https://cmst386-umgc-ganderson58.azurewebsites.net/project4/index.html`, which
is the canonical URL and the one submitted for grading. The same deployment is
also reachable at `https://gilbertanderson.com/` through a Cloudflare Worker.

The domain actually registered is `gilbertanderson.com`. The Project 2 proposal
named `gilbertandersondesign.com` as its target; that proposal is already
graded, so the two intentionally differ and neither should be edited to match
the other.

## Still on Gilbert

- Upload the `project4` folder to the Aloft server and set file permissions.
- Submit the live URL, the reflection document, and the zip to the LEO
  assignment folder.
