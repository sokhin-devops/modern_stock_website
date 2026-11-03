import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { SeoService } from '../../core/seo.service';
import { Cambodia } from '../../sections/cambodia/cambodia';
import { CtaBand } from '../../sections/cta-band/cta-band';
import { How } from '../../sections/how/how';
import { PageHero } from '../../sections/page-hero/page-hero';
import { Reveal } from '../../shared/reveal';

interface FeatureGroup {
  key: string;
  icon: string;
  items: number;
}

/** Features (PLAIN.md 12.1 #2): every module in short, then what is special for Cambodia. */
@Component({
  selector: 'ms-features-page',
  imports: [TranslatePipe, Reveal, PageHero, Cambodia, How, CtaBand],
  templateUrl: './features-page.html',
  styleUrl: './features-page.scss',
})
export class FeaturesPage {
  protected readonly groups: FeatureGroup[] = [
    { key: 'pos', icon: 'pi pi-shopping-cart', items: 5 },
    { key: 'buy', icon: 'pi pi-truck', items: 4 },
    { key: 'stock', icon: 'pi pi-box', items: 4 },
    { key: 'branch', icon: 'pi pi-shop', items: 3 },
    { key: 'debt', icon: 'pi pi-wallet', items: 3 },
    { key: 'team', icon: 'pi pi-users', items: 3 },
    { key: 'report', icon: 'pi pi-chart-bar', items: 4 },
    { key: 'tg', icon: 'pi pi-telegram', items: 3 },
  ];

  constructor() {
    inject(SeoService).set('featuresTitle', 'featuresDescription', 'features');
  }

  protected range(n: number): number[] {
    return Array.from({ length: n }, (_, i) => i + 1);
  }
}
