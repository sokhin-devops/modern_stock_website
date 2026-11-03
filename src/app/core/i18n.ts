import { TranslateLoader, TranslationObject } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

import en from '../../i18n/en.json';
import km from '../../i18n/km.json';

export type Lang = 'km' | 'en';
export const LANGS: readonly Lang[] = ['km', 'en'];

/**
 * Translations are bundled, not fetched over HTTP, so prerendering has them at build time
 * and pages never flash untranslated keys (PLAIN.md 12.1).
 */
export class JsonTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<TranslationObject> {
    return of((lang === 'en' ? en : km) as TranslationObject);
  }
}
