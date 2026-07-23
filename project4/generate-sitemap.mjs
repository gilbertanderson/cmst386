#!/usr/bin/env node
// Zero-dependency sitemap.xml generator for the Strikeworks Studio site.
// Scans the project folder for *.html files and rebuilds sitemap.xml from
// what's actually there, so the sitemap can't silently drift out of sync
// with the real page list as pages are added, renamed, or removed.
//
// Usage:
//   node generate-sitemap.mjs
//   node generate-sitemap.mjs --base https://example.com/project4/ --dir . --out sitemap.xml
//   BASE_URL="https://example.com/project4/" node generate-sitemap.mjs

import { readdirSync, statSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const DEFAULT_BASE_URL = "https://cmst386-umgc-ganderson58.azurewebsites.net/project4/";

// Per-page changefreq/priority. Anything not listed falls back to DEFAULT_RULE.
const RULES = {
  "index.html": { changefreq: "monthly", priority: "1.00" },
  "about.html": { changefreq: "monthly", priority: "0.80" },
  "services.html": { changefreq: "monthly", priority: "0.80" },
  "portfolio.html": { changefreq: "monthly", priority: "0.80" },
  "contact.html": { changefreq: "monthly", priority: "0.80" },
  "case-nonprofit.html": { changefreq: "monthly", priority: "0.64" },
  "case-ecommerce.html": { changefreq: "monthly", priority: "0.64" },
  "case-startup.html": { changefreq: "monthly", priority: "0.64" },
  "testimonials.html": { changefreq: "monthly", priority: "0.64" },
  "blog.html": { changefreq: "weekly", priority: "0.64" },
  "blog-post-seo.html": { changefreq: "monthly", priority: "0.51" },
  "privacy.html": { changefreq: "yearly", priority: "0.32" },
};
const DEFAULT_RULE = { changefreq: "monthly", priority: "0.50" };

function parseArgs(argv) {
  const args = { base: null, dir: null, out: null };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--base") args.base = argv[++i];
    else if (argv[i] === "--dir") args.dir = argv[++i];
    else if (argv[i] === "--out") args.out = argv[++i];
  }
  return args;
}

function isoDate(d) {
  return d.toISOString().slice(0, 10);
}

function xmlEscape(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const dir = resolve(args.dir || ".");
  let base = args.base || process.env.BASE_URL || DEFAULT_BASE_URL;
  if (!base.endsWith("/")) base += "/";
  const outPath = resolve(dir, args.out || "sitemap.xml");

  const htmlFiles = readdirSync(dir).filter((f) => f.toLowerCase().endsWith(".html"));

  // index.html first, then alphabetical for everything else, matching the
  // order the site's own nav/footer roughly follows.
  htmlFiles.sort((a, b) => {
    if (a === "index.html") return -1;
    if (b === "index.html") return 1;
    return a.localeCompare(b);
  });

  if (htmlFiles.length === 0) {
    console.error(`No *.html files found in ${dir}`);
    process.exit(1);
  }

  const urlEntries = htmlFiles.map((file) => {
    const stat = statSync(join(dir, file));
    const rule = RULES[file] || DEFAULT_RULE;
    const loc = xmlEscape(base + file);
    return [
      "  <url>",
      `    <loc>${loc}</loc>`,
      `    <lastmod>${isoDate(stat.mtime)}</lastmod>`,
      `    <changefreq>${rule.changefreq}</changefreq>`,
      `    <priority>${rule.priority}</priority>`,
      "  </url>",
    ].join("\n");
  });

  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urlEntries.join("\n") +
    "\n</urlset>\n";

  writeFileSync(outPath, xml, "utf8");
  console.log(`Wrote ${outPath} with ${htmlFiles.length} URLs (base: ${base})`);
}

main();
