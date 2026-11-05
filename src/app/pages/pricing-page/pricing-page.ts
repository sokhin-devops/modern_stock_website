import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { PlatformService } from '../../core/platform.service';
import { FEATURE_KEYS, LIMIT_KEYS, PlansService } from '../../core/plans.service';
import { SeoService } from '../../core/seo.service';
import { CtaBand } from '../../sections/cta-band/cta-band';
import { FaqList } from '../../sections/faq-list/faq-list';
import { PageHero } from '../../sections/page-hero/page-hero';
import { PricingPlans } from '../../sections/pricing-plans/pricing-plans';
import { Reveal } from '../../shared/reveal';

/** Pricing (PLAIN.md 12.1 #6): plan cards and a comparison table, both from GET /public/plans. */
@Component({
  selector: 'ms-pricing-page',
  imports: [TranslatePipe, Reveal, PageHero, PricingPlans, FaqList, CtaBand],
  templateUrl: './pricing-page.html',
  styleUrl: './pricing-page.scss',
})
export class PricingPage {
  protected readonly plans = inject(PlansService);
  protected readonly platform = inject(PlatformService);
  protected readonly limitKeys = LIMIT_KEYS;
  protected readonly featureKeys = FEATURE_KEYS;
  protected readonly billingFaq = ['afterTrial', 'pay', 'cancel', 'manyBusinesses'];
  protected readonly limitLabels: Record<string, string> = {
    branches: 'pricing.rowBranches',
    members: 'pricing.rowMembers',
    products: 'pricing.rowProducts',
  };

  constructor() {
    inject(SeoService).set('pricingTitle', 'pricingDescription', 'pricing');
  }

  protected format(n: number | null | undefined): string {
    return n == null ? '' : n.toLocaleString('en-US');
  }
}
