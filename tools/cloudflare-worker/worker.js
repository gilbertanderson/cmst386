/**
 * Reverse proxy: gilbertanderson.com -> the CMST 386 Azure Web App.
 *
 * Why a Worker and not a DNS record. Azure App Service routes by Host header.
 * A request arriving with Host: gilbertanderson.com gets Azure's "Error 404 -
 * Site Not Found" parking page, verified directly against the origin. Only the
 * app's own hostname returns the site. Cloudflare can rewrite the Host header
 * with an Origin Rule, but that override is Enterprise only, so on the Free
 * plan a Worker is the way to do it.
 *
 * Rewriting the URL hostname before fetching is what fixes this: the runtime
 * derives both the Host header and the TLS SNI from the request URL, so Azure
 * sees its own hostname and serves the site.
 */

const ORIGIN = "cmst386-umgc-ganderson58.azurewebsites.net";

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const publicHost = url.hostname;

    url.protocol = "https:";
    url.hostname = ORIGIN;
    url.port = "";

    const originRequest = new Request(url.toString(), request);
    // Not used by the static site, but it keeps the real hostname visible to
    // the origin instead of silently discarding it.
    originRequest.headers.set("X-Forwarded-Host", publicHost);

    // Handle redirects here rather than following them, so an absolute Location
    // from Azure cannot quietly move visitors onto the azurewebsites.net host.
    const response = await fetch(originRequest, { redirect: "manual" });

    const location = response.headers.get("Location");
    if (location && location.includes(ORIGIN)) {
      const rewritten = new Response(response.body, response);
      rewritten.headers.set("Location", location.replaceAll(ORIGIN, publicHost));
      return rewritten;
    }

    return response;
  },
};
