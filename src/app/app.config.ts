import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideTranslateLoader, provideTranslateService } from '@ngx-translate/core';
import { providePrimeNG } from 'primeng/config';

import { routes } from './app.routes';
import { JsonTranslateLoader } from './core/i18n';
import { ModernStockPreset } from './core/theme';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'top', anchorScrolling: 'enabled' })),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    provideTranslateService({
      loader: provideTranslateLoader(JsonTranslateLoader),
      lang: 'km',
      fallbackLang: 'en',
    }),
    providePrimeNG({
      ripple: false,
      theme: {
        preset: ModernStockPreset,
        // Same dark class as the prototype and Tailwind; PrimeNG sits in its own layer under our components.
        options: { darkModeSelector: '.app-dark', cssLayer: { name: 'primeng', order: 'theme, base, primeng' } },
      },
    }),
  ],
};
