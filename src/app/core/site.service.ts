import { DOCUMENT, Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { environment } from '../../environments/environment';
import { Lang } from './i18n';

/** The page language, links inside the website, and links into the web app. */
@Injectable({ providedIn: 'root' })
export class SiteService {
  private readonly translate = inject(TranslateService);
  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);

  readonly lang = signal<Lang>('km');
  readonly env = environment;

  setLang(lang: Lang): void {
    this.lang.set(lang);
    this.translate.use(lang);
    this.document.documentElement.lang = lang;
  }

  /** A website route in the current language, for routerLink: link('pricing') → ['/km', 'pricing']. */
  link(page = ''): string[] {
    return page ? ['/', this.lang(), page] : ['/', this.lang()];
  }

  /** The same page in the other language. */
  otherLangUrl(): string {
    const other: Lang = this.lang() === 'km' ? 'en' : 'km';
    const path = this.router.url.split(/[?#]/)[0].replace(/^\/(km|en)(?=\/|$)/, '');
    return `/${other}${path}`;
  }

  /** The web app opens in the visitor's language (PLAIN.md 8: ?lang=km). */
  appUrl(page: 'login' | 'sign-up'): string {
    return `${environment.appUrl}/${page}?lang=${this.lang()}`;
  }
}
