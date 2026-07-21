# Handoff: CMST 386 site — Project 2 added, ready to push

## Where things stand
- Repo: `/Users/gilbertanderson/Development/cmst386` (git remote: `origin` → `github.com/gilbertanderson/cmst386.git`)
- Deploy: `.github/workflows/main.yml` auto-deploys to Azure Web App
  `CMST386-UMGC-ganderson58` on every push to `main` (uses secret
  `AZURE_WEBAPP_PUBLISH_PROFILE`, already configured in GitHub repo settings).
- Local commit `3aac9a2` is made and NOT yet pushed — my Mac had no internet
  connection when I tried (`git push` failed with "Could not resolve host:
  github.com", confirmed via failed pings to 8.8.8.8 and DNS lookups).

## Immediate next step
Once internet is back, from the repo root run:
```
git push origin main
```
That's it — the workflow picks it up and redeploys automatically. Confirm
the live page at `https://cmst386-umgc-ganderson58.azurewebsites.net/project2/project2.html`
after a minute or two, and check the Home page nav now links Project 2
instead of showing it grayed out.

## What was added this commit
- `project2/project2.html` — new Project 2 page, same header/nav/footer
  pattern as `project1/project1.html`. Summarizes the proposal (client/topic,
  audience + personas, site map, wireframes v1 and v2, security/hosting/
  marketing, references) and links to the full Word doc.
- `project2/Project2-Website-Proposal-GilbertAnderson.docx` — the complete
  250/250-rubric proposal document (all 10 required sections plus
  References), source of truth for the written content.
- `project2/images/` — `sitemap.png`, `wireframe-home-v1.png` /
  `wireframe-interior-v1.png` (low-fidelity, built with Matplotlib),
  `wireframe-home-v2.png` / `wireframe-interior-v2.png` (higher-fidelity,
  built with Claude Design).
- `index.html` and `project1/project1.html` — nav placeholder for
  "Project 2" replaced with a real link to `project2/project2.html`;
  homepage project list updated too.

## Project 4 build plan (from the proposal, for when that project starts)
10 HTML5 pages, flat IA, one shared header/nav/footer + one external
stylesheet, same pattern as this repo already uses for Project 1:
`index.html` (Home), `about.html`, `services.html`, `portfolio.html`,
`case-nonprofit.html`, `case-ecommerce.html`, `case-startup.html`,
`testimonials.html`, `blog.html`, `blog-post-seo.html`. No e-commerce, no
accounts, no password-protected content. Target domain
`gilbertandersondesign.com` (not yet registered — just proposed/reasoned
about per the assignment, verify actual availability before Project 4).

## Known open items (outside this commit, still on Gilbert)
- Verify `gilbertandersondesign.com` availability via an actual registrar.
- Get instructor approval on the Project 2 topic.
- Per assignment instructions: upload the `project2` folder to the Aloft
  web server (separate from the Azure deploy), and submit the working URL
  in the LEO assignment folder.
