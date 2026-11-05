import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';

import { environment } from '../../environments/environment';

/** Khmer digits for the Khmer texts: 30 → ៣០. */
function khmerDigits(n: number): string {
  return String(n).replace(/\d/g, (d) => String.fromCharCode(0x17e0 + Number(d)));
}

/**
 * The trial length the super admin sets (GET /public/platform, FR-8.8). The prerendered pages say 30 days, the
 * default; in the browser the real length replaces it, like the plans.
 */
@Injectable({ providedIn: 'root' })
export class PlatformService {
  private readonly http = inject(HttpClient);
  private loaded = false;

  readonly trialDays = signal(30);
  /** Translation parameters: {{days}} in English, {{daysKm}} in Khmer digits. */
  readonly trial = computed(() => ({ days: this.trialDays(), daysKm: khmerDigits(this.trialDays()) }));

  /** Browser only (call from afterNextRender). */
  load(): void {
    if (this.loaded) {
      return;
    }
    this.loaded = true;
    this.http.get<{ trialDays: number }>(`${environment.apiUrl}/public/platform`).subscribe({
      next: (p) => p.trialDays > 0 && this.trialDays.set(p.trialDays),
      error: () => (this.loaded = false),
    });
  }
}
