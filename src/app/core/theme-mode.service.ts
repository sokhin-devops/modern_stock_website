import { DOCUMENT, Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

const KEY = 'ms-theme';

/**
 * Light or dark, remembered per browser. index.html applies the saved choice before Angular starts,
 * so a dark page never flashes white. PrimeNG and Tailwind both follow the .app-dark class.
 */
@Injectable({ providedIn: 'root' })
export class ThemeModeService {
  private readonly document = inject(DOCUMENT);
  private readonly browser = isPlatformBrowser(inject(PLATFORM_ID));

  readonly dark = signal(this.browser && this.document.documentElement.classList.contains('app-dark'));

  toggle(): void {
    const dark = !this.dark();
    this.dark.set(dark);
    this.document.documentElement.classList.toggle('app-dark', dark);
    try {
      localStorage.setItem(KEY, dark ? 'dark' : 'light');
    } catch {
      // private mode or storage blocked: the choice just isn't remembered
    }
  }
}
