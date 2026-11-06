import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideClientHydration, withEventReplay, withIncrementalHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideTranslateLoader, provideTranslateService } from '@ngx-translate/core';
import { providePrimeNG } from 'primeng/config';

import { routes } from './app.routes';
import { JsonTranslateLoader } from './core/i18n';
import { ModernStockPreset } from './core/theme/modern-stock-preset';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'top', anchorScrolling: 'enabled' })),
    // Incremental hydration: sections below the fold stay plain prerendered HTML, and their code is not even
    // downloaded, until they scroll into view (@defer (hydrate on viewport)): less work while a phone loads the page.
    provideClientHydration(withEventReplay(), withIncrementalHydration()),
    provideHttpClient(withFetch()),
    provideTranslateService({
      loader: provideTranslateLoader(JsonTranslateLoader),
      lang: 'km',
      fallbackLang: 'en',
    }),
    // PrimeNG 19 (MIT, no license key) with the Material preset in the prototype's colors, same theme as the web app.
    // Its styles go into the "primeng" CSS layer (order in tailwind.css) and are part of the prerendered pages.
    provideAnimationsAsync(),
    providePrimeNG({
      ripple: true,
      theme: {
        preset: ModernStockPreset,
        options: {
          darkModeSelector: '.app-dark',
          cssLayer: { name: 'primeng', order: 'theme, base, primeng, components, utilities' },
        },
      },
    }),
  ],
};
