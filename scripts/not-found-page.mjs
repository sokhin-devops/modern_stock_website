// Runs after `ng build` (postbuild). Unknown addresses must show the site's "page not found" screen with status 404,
// never the root index.html: that file is only a redirect to /km, so a host that falls back to it sends every typo
// to the Khmer home page. 404.html is the app without a prerendered page: it starts in the browser and its router
// shows the not-found page in the address's language (/en/... in English, anything else in Khmer).
// Cloudflare serves it by itself (wrangler.jsonc "404-page"); Nginx needs `error_page 404 /404.html;`.
import { copyFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const out = join('dist', 'modern_stock_website', 'browser');
const csr = join(out, 'index.csr.html');
if (!existsSync(csr)) {
  console.error(`not-found-page: ${csr} is missing; was the site built?`);
  process.exit(1);
}
copyFileSync(csr, join(out, '404.html'));
console.log('not-found-page: wrote 404.html');
