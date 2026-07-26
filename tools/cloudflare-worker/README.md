# gilbertanderson.com reverse proxy

A Cloudflare Worker that serves the CMST 386 Azure Web App at
`gilbertanderson.com`, without binding a custom domain in Azure.

## Why this exists

Azure App Service routes by `Host` header. Send it `Host: gilbertanderson.com`
and it returns its "Error 404 - Site Not Found" parking page; only its own
hostname returns the site. So simply pointing a proxied DNS record at Azure does
not work.

Cloudflare can rewrite the `Host` header with an Origin Rule, but that override
is Enterprise only. On the Free plan a Worker is the way to do it: rewriting the
URL hostname before `fetch` makes the runtime derive both the `Host` header and
the TLS SNI from the new URL, so Azure sees its own hostname and serves the app.

The Worker also rewrites absolute `Location` headers. Azure 301s
`/project4` to `https://cmst386-umgc-ganderson58.azurewebsites.net/project4/`,
which would otherwise drop visitors onto the Azure hostname mid-session.

## Deploy

```bash
export CLOUDFLARE_ACCOUNT_ID='...'      # Cloudflare dashboard, Workers & Pages
npx wrangler login                       # or export CLOUDFLARE_API_TOKEN
cd tools/cloudflare-worker
npx wrangler deploy
```

Then attach the hostnames in the dashboard: Workers & Pages ->
`gilbertanderson-proxy` -> Settings -> Domains & Routes -> Add -> Custom Domain,
for both `gilbertanderson.com` and `www.gilbertanderson.com`. Cloudflare creates
the proxied DNS records and provisions the edge certificate itself, so no manual
DNS entry is needed.

## What this does not change

Azure stays canonical, which is deliberate while Project 4 is being graded:

- `project4/sitemap.xml` and `project4/robots.txt` keep their Azure URLs. The
  rubric requires the sitemap to be byte-exact xml-sitemaps.com output.
- The footer search box stays scoped to the Azure host.
- `https://cmst386-umgc-ganderson58.azurewebsites.net/` keeps working exactly as
  before. Nothing about the deployment or the GitHub Actions workflow changes.

## Limits

Workers Free allows 100,000 requests per day and 10 ms CPU per request, which is
far beyond what a portfolio site uses. Every request to the custom domain counts,
including images and CSS.

## Verifying

```bash
curl -sI https://gilbertanderson.com/project4/index.html
curl -s https://gilbertanderson.com/project4/index.html | grep -o '<title>[^<]*'
curl -sI https://gilbertanderson.com/project4 | grep -i location
```

The first should be 200, the second should read `Strikeworks Studio | Home`, and
the third should point at `gilbertanderson.com`, not `azurewebsites.net`. If any
page shows "Error 404 - Site Not Found" with Azure branding, the Worker is not
attached to that hostname and the request is reaching Azure directly.
