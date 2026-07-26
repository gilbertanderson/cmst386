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
npx wrangler login                       # OAuth session; account is inferred
cd tools/cloudflare-worker
npx wrangler deploy -c wrangler.toml
```

That is the whole deploy. The hostname is attached by the `routes` entry in
`wrangler.toml`, so there is no dashboard step.

Pass `-c wrangler.toml` explicitly. Wrangler searches parent directories for
config, and a stray `wrangler.jsonc` higher up the tree will silently win and
deploy the wrong thing.

### Why a route and not a custom domain

`custom_domain = true` makes Cloudflare create and own the DNS records for the
hostname, so it refuses to attach to any hostname that already has them:

```
code 100117: Hostname 'gilbertanderson.com' already has externally managed
DNS records (A, CNAME, etc). Delete them first or try a different hostname.
```

The apex already has proxied records, and a proxied record is exactly what a
plain route binds to. So the route works with what is already there, needs no
dashboard access, and deploys with the standard wrangler OAuth scopes
(`workers_routes` write, `zone` read). Deleting the records to satisfy custom
domain mode would have been destroying the thing that makes the route work.

Route patterns need the `/*` suffix and a `zone_name`; a bare hostname is
custom-domain syntax.

### Adding www

`www.gilbertanderson.com` is not attached, because it has no DNS record at all
and a route cannot resolve without one. To add it: create a proxied CNAME
(`www` -> `gilbertanderson.com`, orange cloud), then add a second entry to
`routes` and redeploy.

Expect transient 522s for up to a minute after a route change while it
propagates. That is not a failure; re-check before debugging.

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
