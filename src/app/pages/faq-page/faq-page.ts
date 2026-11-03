import { Component, inject } from '@angular/core';

import { SeoService } from '../../core/seo.service';
import { CtaBand } from '../../sections/cta-band/cta-band';
import { FaqList } from '../../sections/faq-list/faq-list';
import { PageHero } from '../../sections/page-hero/page-hero';

/** FAQ (PLAIN.md 12.1 #7): every question, in Khmer and English. */
@Component({
  selector: 'ms-faq-page',
  imports: [PageHero, FaqList, CtaBand],
  templateUrl: './faq-page.html',
  styleUrl: './faq-page.scss',
})
export class FaqPage {
  constructor() {
    inject(SeoService).set('faqTitle', 'faqDescription', 'faq');
  }
}
