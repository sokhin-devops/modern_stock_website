import { Component, inject } from '@angular/core';

import { SeoService } from '../../core/seo.service';
import { Cambodia } from '../../sections/cambodia/cambodia';
import { CtaBand } from '../../sections/cta-band/cta-band';
import { FAQ_KEYS, FaqList } from '../../sections/faq-list/faq-list';
import { Features } from '../../sections/features/features';
import { Hero } from '../../sections/hero/hero';
import { How } from '../../sections/how/how';
import { PricingPlans } from '../../sections/pricing-plans/pricing-plans';
import { Why } from '../../sections/why/why';

/** Home (PLAIN.md 12.1 #1): the prototype's single page, with links on to the full pages. */
@Component({
  selector: 'ms-home',
  imports: [Hero, Why, Features, Cambodia, How, PricingPlans, FaqList, CtaBand],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly faqKeys = FAQ_KEYS.slice(0, 6);

  constructor() {
    inject(SeoService).set('homeTitle', 'homeDescription');
  }
}
