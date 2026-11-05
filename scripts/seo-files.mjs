// Writes public/sitemap.xml and public/robots.txt (FR-9.10) from the production site URL and the pages in
// app.routes.ts, so they always match the site. Runs before every `npm run build` (the "prebuild" script).
import { readFileSync, writeFileSync } from 'node:fs';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const write = (path, text) => writeFileSync(new URL(`../${path}`, import.meta.url), text);

const site = /siteUrl:\s*'([^']+)'/.exec(read('src/environments/environment.prod.ts'))[1].replace(/\/$/, '');
const langs = [.../LANGS[^=]*=\s*\[([^\]]+)\]/.exec(read('src/app/core/i18n.ts'))[1].matchAll(/'([a-z]+)'/g)].map((m) => m[1]);
const routes = read('src/app/app.routes.ts');
const start = routes.indexOf('const pages');
const pages = [...routes.slice(start, routes.indexOf('];', start)).matchAll(/path: '([^']*)'/g)]
  .map((m) => m[1])
  .filter((path) => path !== '**');

const url = (lang, page) => `${site}/${lang}${page ? `/${page}` : ''}`;
const entries = pages.flatMap((page) =>
  langs.map((lang) => [
    '  <url>',
    `    <loc>${url(lang, page)}</loc>`,
    ...langs.map((other) => `    <xhtml:link rel="alternate" hreflang="${other}" href="${url(other, page)}"/>`),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${url(langs[0], page)}"/>`,
    `    <changefreq>${page === '' || page === 'pricing' ? 'weekly' : 'monthly'}</changefreq>`,
    `    <priority>${page === '' ? '1.0' : page === 'terms' || page === 'privacy' ? '0.3' : '0.7'}</priority>`,
    '  </url>',
  ].join('\n')),
);

write('public/sitemap.xml', [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
  ...entries,
  '</urlset>',
  '',
].join('\n'));
write('public/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${site}/sitemap.xml\n`);
console.log(`sitemap.xml: ${entries.length} pages on ${site}; robots.txt written`);
