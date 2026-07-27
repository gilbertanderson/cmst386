# CMST 386 Web Projects

Portfolio site for CMST 386, Principles of Web Design and Technology II, by
Gilbert Anderson. Four course projects plus the client sites built for the
Project 4 case studies.

## Projects

| Project | Topic | Status |
|---------|-------|--------|
| [Project 1](project1/project1.html) | SEO, accessibility, and user engagement, with an [image gallery](project1/gallery.html) | Complete |
| [Project 2](project2/project2.html) | Website proposal and plan for Project 4 | Complete |
| [Project 3](project3/project3.html) | Responsive design with [SASS preprocessing](project3/preprocessing.html) | Complete |
| [Project 4](project4/index.html) | Strikeworks Studio, a 12-page UX studio site | Complete |

## Client sites

Project 4's case studies describe work for three fictional clients. Those sites
are actually built, and each case study links to the one it describes. They live
outside `project4/` on purpose, so the graded page count and the byte-exact
sitemap stay untouched. See [clients/README.md](clients/README.md).

| Site | Pages |
|------|-------|
| [Ironwood Technology Charter School](clients/ironwood/index.html) | 10 |
| [Contreras Family Bakery](clients/bakery/index.html) | 5 |
| [Northstar Analytics](clients/northstar/index.html) | 1 |

## Structure

```
index.html          Home page linking to all four projects
css/style.css       Shared stylesheet for the home page, Project 1, Project 2
web.config          IIS MIME maps so .scss and .map serve as text on Azure
project1/ - 4/      The four graded projects, each self-contained
clients/            Client sites linked from the Project 4 case studies
tools/              Build and capture scripts, not part of any deliverable
.github/workflows/  Azure deploy pipeline
```

Project 3 and Project 4 have their own stylesheets and their own header, nav,
and footer patterns. The rubrics treat them as separate deliverables, so they
are deliberately not unified with the shared stylesheet.

## Deployment

Pushing to `main` triggers `.github/workflows/main.yml`, which deploys the
repository root to Azure Web App `CMST386-UMGC-ganderson58`. There is no manual
deploy step.

The site is reachable at two hostnames:

- `https://cmst386-umgc-ganderson58.azurewebsites.net/` is canonical, and is the
  URL submitted for grading.
- `https://gilbertanderson.com/` serves the same deployment through a Cloudflare
  Worker that reverse-proxies to Azure. See
  [tools/cloudflare-worker/README.md](tools/cloudflare-worker/README.md).

## Local preview

```bash
python3 -m http.server 8737
```

Relative paths and the `web.config` MIME behavior mean `file://` previews can
mislead, so use the server.

## House style

No em dashes anywhere, including comments and metadata. Use a comma, a
semicolon, or a rewrite instead.

Prose reads like a student wrote it, because one did. Plain, direct, first
person where appropriate.

Every page meets the same baseline: `<!DOCTYPE html>`, `<html lang="en">`,
semantic sectioning, a skip link, one `h1` with no skipped heading levels,
unique title and meta tags, descriptive alt text, 4.5:1 minimum contrast, and
clean W3C validation.
