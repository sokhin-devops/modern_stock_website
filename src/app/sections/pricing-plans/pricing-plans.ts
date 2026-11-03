import { Component, afterNextRender, computed, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ButtonDirective, ButtonLabel } from 'primeng/button';
import { SelectButton } from 'primeng/selectbutton';

import { FEATURE_KEYS, Plan, PlansService } from '../../core/plans.service';
import { SiteService } from '../../core/site.service';
import { Reveal } from '../../shared/reveal';

/**
 * Plan cards from GET /public/plans (PLAIN.md 12.1: "every button leads to sign-up"). Pro is highlighted.
 * A Monthly / Yearly switch shows the yearly prices and how many months a year costs less.
 */
@Component({
  selector: 'ms-pricing-plans',
  imports: [FormsModule, TranslatePipe, ButtonDirective, ButtonLabel, SelectButton, Reveal],
  templateUrl: './pricing-plans.html',
  styleUrl: './pricing-plans.scss',
})
export class PricingPlans {
  readonly showHead = input(true);
  protected readonly plans = inject(PlansService);
  protected readonly site = inject(SiteService);
  private readonly translate = inject(TranslateService);
  protected readonly features = FEATURE_KEYS;

  protected readonly billing = signal<'month' | 'year'>('month');
  protected readonly yearly = computed(() => this.billing() === 'year');

  /** Months a yearly plan saves (yearly price against 12 monthly payments), for the switch label. */
  private readonly monthsFree = computed(() =>
    Math.max(
      0,
      ...this.plans
        .plans()
        .filter((p) => p.priceMonthly > 0 && p.priceYearly)
        .map((p) => Math.round(12 - p.priceYearly! / p.priceMonthly)),
    ),
  );

  /** Switch labels in the page's language (the prerendered page has the right one for /km and /en). */
  protected readonly billingOptions = computed(() => {
    this.site.lang();
    const months = this.monthsFree();
    const yearly = this.translate.instant('pricing.yearlyOption');
    return [
      { value: 'month', label: this.translate.instant('pricing.monthly') },
      { value: 'year', label: months > 0 ? `${yearly} · ${this.translate.instant('pricing.monthsFree', { n: months })}` : yearly },
    ];
  });

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

  /** A yearly price as a monthly amount: $250 a year is $20.83 a month. */
  protected monthly(yearlyPrice: number): string {
    return (yearlyPrice / 12).toFixed(2);
  }
}
