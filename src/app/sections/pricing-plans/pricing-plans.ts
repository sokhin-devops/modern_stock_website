import { Component, afterNextRender, inject, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { FEATURE_KEYS, Plan, PlansService } from '../../core/plans.service';
import { SiteService } from '../../core/site.service';
import { Reveal } from '../../shared/reveal';

/** Plan cards from GET /public/plans (PLAIN.md 12.1: "every button leads to sign-up"). Pro is highlighted. */
@Component({
  selector: 'ms-pricing-plans',
  imports: [TranslatePipe, Reveal],
  templateUrl: './pricing-plans.html',
  styleUrl: './pricing-plans.scss',
})
export class PricingPlans {
  readonly showHead = input(true);
  protected readonly plans = inject(PlansService);
  protected readonly site = inject(SiteService);
  protected readonly features = FEATURE_KEYS;

  constructor() {
    afterNextRender(() => this.plans.load());
  }

  protected limitText(plan: Plan, key: 'branches' | 'products'): string {
    const n = plan.limits[key];
    if (key === 'products') {
      return n === null ? 'pricing.productsUnlimited' : 'pricing.products';
    }
    return n === 1 ? 'pricing.branches_one' : 'pricing.branches';
  }

  protected format(n: number | null | undefined): string {
    return n == null ? '' : n.toLocaleString('en-US');
  }
}
