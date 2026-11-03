import { DOCUMENT } from '@angular/common';
import { Injectable, afterNextRender, inject } from '@angular/core';

/** Long enough to read as a deliberate splash, never a flicker. */
const MIN_VISIBLE_MS = 450;
/** Slow networks: stop waiting for the fonts and show the page anyway. */
const MAX_FONT_WAIT_MS = 1500;
/** The fonts the page needs, loaded on purpose so icons and Khmer text never pop in after the splash. */
const FONTS = ['16px primeicons', '400 16px Roboto', '500 16px Roboto', '400 16px "Kantumruy Pro"'];

/**
 * Hides the splash screen in index.html once the app has rendered in the browser and the fonts are ready,
 * so the page appears in one smooth step: no unstyled text, no empty icon boxes.
 * On the server (prerendering) nothing happens; the splash is part of the static HTML.
 */
@Injectable({ providedIn: 'root' })
export class SplashService {
  private readonly document = inject(DOCUMENT);

  /** Call once from the root component's constructor. */
  hideWhenReady(): void {
    afterNextRender(() => {
      const splash = this.document.getElementById('ms-splash');
      if (!splash) {
        return;
      }
      const fonts = this.document.fonts;
      const loading = fonts
        ? Promise.all(FONTS.map((f) => fonts.load(f, sample(f)))).then(() => fonts.ready)
        : Promise.resolve();
      const fontsOrTimeout = Promise.race([loading.catch(() => undefined), wait(MAX_FONT_WAIT_MS)]);
      const minimum = wait(Math.max(0, MIN_VISIBLE_MS - performance.now()));
      Promise.all([fontsOrTimeout, minimum]).then(() => {
        splash.classList.add('ms-splash-out');
        // Remove it after the fade; the timeout covers browsers that skip transitionend.
        splash.addEventListener('transitionend', () => splash.remove(), { once: true });
        setTimeout(() => splash.remove(), 800);
      });
    });
  }
}

/** Text the font draws, so the browser fetches it: a Khmer letter, a PrimeIcons glyph (pi-box), or a Latin letter. */
function sample(font: string): string {
  return font.includes('Kantumruy') ? 'ក' : font.includes('primeicons') ? '\ue9d9' : 'a';
}

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
