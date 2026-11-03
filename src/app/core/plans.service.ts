import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';

import { environment } from '../../environments/environment';

/** GET /public/plans: limits are null for unlimited, 0 or 1 for features. */
export interface Plan {
  code: string;
  name: string;
  priceMonthly: number;
  priceYearly: number | null;
  limits: Record<string, number | null>;
}

/**
 * The example plans from PLAIN.md 11.13 (same as the API's V3__seed_plans.sql). They are prerendered into the page,
 * so it works without the API; in the browser the live plans from the API replace them.
 */
const FALLBACK: Plan[] = [
  {
    code: 'FREE', name: 'Free', priceMonthly: 0, priceYearly: 0,
    limits: { branches: 1, members: 2, products: 300, telegram_alerts: 0, excel_export: 0, tax_invoice: 0 },
  },
  {
    code: 'BASIC', name: 'Basic', priceMonthly: 9, priceYearly: 90,
    limits: { branches: 3, members: 10, products: 3000, telegram_alerts: 1, excel_export: 1, tax_invoice: 0 },
  },
  {
    code: 'PRO', name: 'Pro', priceMonthly: 25, priceYearly: 250,
    limits: { branches: 10, members: 30, products: null, telegram_alerts: 1, excel_export: 1, tax_invoice: 1 },
  },
];

export const LIMIT_KEYS = ['branches', 'members', 'products'] as const;
export const FEATURE_KEYS = ['telegram_alerts', 'excel_export', 'tax_invoice'] as const;

@Injectable({ providedIn: 'root' })
export class PlansService {
  private readonly http = inject(HttpClient);
  private loaded = false;

  readonly plans = signal<Plan[]>(FALLBACK);

  /** Browser only (call from afterNextRender): the prerendered page keeps the fallback if the API is down. */
  load(): void {
    if (this.loaded) {
      return;
    }
    this.loaded = true;
    this.http.get<Plan[]>(`${environment.apiUrl}/public/plans`).subscribe({
      next: (plans) => plans.length && this.plans.set(plans),
      error: () => (this.loaded = false),
    });
  }
}
