import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

import { SiteService } from '../../core/site.service';
import { Reveal } from '../../shared/reveal';

/** The six key features; Home links on to the full Features page. */
@Component({
  selector: 'ms-features',
  imports: [RouterLink, TranslatePipe, Reveal],
  templateUrl: './features.html',
  styleUrl: './features.scss',
})
export class Features {
  readonly showMore = input(false);
  protected readonly site = inject(SiteService);
  protected readonly items = [
    { key: 'pos', icon: 'point_of_sale' },
    { key: 'stock', icon: 'inventory_2' },
    { key: 'credit', icon: 'account_balance_wallet' },
    { key: 'branches', icon: 'storefront' },
    { key: 'telegram', icon: 'send' },
    { key: 'reports', icon: 'bar_chart' },
  ];
}
