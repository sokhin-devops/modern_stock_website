import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonDirective, ButtonIcon, ButtonLabel } from 'primeng/button';

import { SiteService } from '../../core/site.service';
import { Reveal } from '../../shared/reveal';

/** The six key features; Home links on to the full Features page. */
@Component({
  selector: 'ms-features',
  imports: [RouterLink, TranslatePipe, Reveal, ButtonDirective, ButtonIcon, ButtonLabel],
  templateUrl: './features.html',
  styleUrl: './features.scss',
})
export class Features {
  readonly showMore = input(false);
  protected readonly site = inject(SiteService);
  protected readonly items = [
    { key: 'pos', icon: 'pi pi-shopping-cart' },
    { key: 'stock', icon: 'pi pi-box' },
    { key: 'credit', icon: 'pi pi-wallet' },
    { key: 'branches', icon: 'pi pi-shop' },
    { key: 'telegram', icon: 'pi pi-telegram' },
    { key: 'reports', icon: 'pi pi-chart-bar' },
  ];
}
