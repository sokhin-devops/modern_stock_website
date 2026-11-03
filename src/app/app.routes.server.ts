import { RenderMode, ServerRoute } from '@angular/ssr';

/** Every page is prerendered to static HTML at build time; production needs no Node server (PLAIN.md 9.2). */
export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
