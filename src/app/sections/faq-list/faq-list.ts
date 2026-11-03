import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

import { SiteService } from '../../core/site.service';
import { Reveal } from '../../shared/reveal';

export const FAQ_KEYS = [
  'afterTrial', 'phones', 'receipts', 'staffEmail', 'manyBusinesses', 'privacy', 'rate', 'offline', 'pay', 'cancel',
];

/** Questions as native <details>: they open without JavaScript, and search engines read the answers. */
@Component({
  selector: 'ms-faq-list',
  imports: [RouterLink, TranslatePipe, Reveal],
  templateUrl: './faq-list.html',
  styleUrl: './faq-list.scss',
})
export class FaqList {
  readonly keys = input(FAQ_KEYS);
  readonly showAll = input(false);
  /** false on the FAQ page, where the page hero already has the title. */
  readonly aside = input(true);
  readonly title = input<string>();
  protected readonly site = inject(SiteService);
}
