import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

import { environment } from '../../environments/environment';
import { LANGS } from './i18n';
import { PlatformService } from './platform.service';
import { SiteService } from './site.service';

/**
 * Title, description, Open Graph tags (so links shared on Facebook and Telegram look right, PLAIN.md 4),
 * the canonical URL, and links to the same page in the other language.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly translate = inject(TranslateService);
  private readonly site = inject(SiteService);
  private readonly document = inject(DOCUMENT);
  private readonly platform = inject(PlatformService);

  /** titleKey and descriptionKey are under "meta" in the translation files; page is the path after /km. */
  set(titleKey: string, descriptionKey: string | null, page = ''): void {
    // without a description of its own, the page gets the home page's (fetched here, or it would be empty)
    const keys = ['meta.siteName', `meta.${titleKey}`, descriptionKey ? `meta.${descriptionKey}` : 'meta.homeDescription'];
    this.translate.get(keys, this.platform.trial()).subscribe((t: Record<string, string>) => {
      const description = descriptionKey ? t[`meta.${descriptionKey}`] : t['meta.homeDescription'] ?? '';
      this.apply(t['meta.siteName'], t[`meta.${titleKey}`], description, page);
    });
  }

  /** A page whose title and description are text, not translation keys (Help Center articles). */
  setText(pageTitle: string, description: string, page: string): void {
    this.translate.get('meta.siteName').subscribe((name: string) => this.apply(name, pageTitle, description, page));
  }

  private apply(name: string, pageTitle: string, description: string, page: string): void {
    const fullTitle = page ? `${pageTitle} · ${name}` : pageTitle;
    const lang = this.site.lang();
    const url = `${environment.siteUrl}/${lang}${page ? '/' + page : ''}`;

    this.title.setTitle(fullTitle);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:site_name', content: name });
    this.meta.updateTag({ property: 'og:locale', content: lang === 'km' ? 'km_KH' : 'en_US' });
    this.meta.updateTag({ property: 'og:image', content: `${environment.siteUrl}/og-image.png` });
    this.meta.updateTag({ property: 'og:image:width', content: '1200' });
    this.meta.updateTag({ property: 'og:image:height', content: '630' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });

    this.setLink('canonical', url);
    for (const other of LANGS) {
      this.setLink('alternate', `${environment.siteUrl}/${other}${page ? '/' + page : ''}`, other);
    }
  }

  private setLink(rel: string, href: string, hreflang?: string): void {
    const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]:not([hreflang])`;
    let link = this.document.head.querySelector<HTMLLinkElement>(selector);
    if (!link) {
      link = this.document.createElement('link');
      link.rel = rel;
      if (hreflang) {
        link.hreflang = hreflang;
      }
      this.document.head.appendChild(link);
    }
    link.href = href;
  }
}
