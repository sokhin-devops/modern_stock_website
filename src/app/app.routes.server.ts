import { RenderMode, ServerRoute } from '@angular/ssr';

import { LANGS } from './core/i18n';
import { HELP_SLUGS } from './help/help-content';

/** Every page is prerendered to static HTML at build time; production needs no Node server (PLAIN.md 9.2). */
export const serverRoutes: ServerRoute[] = [
  // each Help Center guide, in both languages
  ...LANGS.map(
    (lang): ServerRoute => ({
      path: `${lang}/help/:slug`,
      renderMode: RenderMode.Prerender,
      getPrerenderParams: async () => HELP_SLUGS.map((slug) => ({ slug })),
    }),
  ),
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
