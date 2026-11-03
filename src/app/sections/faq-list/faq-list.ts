import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { Accordion, AccordionContent, AccordionHeader, AccordionPanel } from 'primeng/accordion';
import { ButtonDirective, ButtonIcon, ButtonLabel } from 'primeng/button';

import { SiteService } from '../../core/site.service';
import { Reveal } from '../../shared/reveal';

export const FAQ_KEYS = [
  'afterTrial', 'phones', 'receipts', 'staffEmail', 'manyBusinesses', 'privacy', 'rate', 'offline', 'pay', 'cancel',
];

/**
 * Questions in a PrimeNG accordion, drawn as the prototype's flat list. Every answer is part of the prerendered page
 * (closed ones are only hidden), so search engines read them all.
 */
@Component({
  selector: 'ms-faq-list',
  imports: [
    RouterLink, TranslatePipe, Accordion, AccordionPanel, AccordionHeader, AccordionContent, ButtonDirective, ButtonIcon,
    ButtonLabel, Reveal,
  ],
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
