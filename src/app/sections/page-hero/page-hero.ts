import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

/** Title band at the top of the inner pages. */
@Component({
  selector: 'ms-page-hero',
  imports: [TranslatePipe],
  templateUrl: './page-hero.html',
  styleUrl: './page-hero.scss',
})
export class PageHero {
  readonly kicker = input.required<string>();
  readonly title = input.required<string>();
  readonly lead = input<string>();
  /** Values for the lead, e.g. the trial length. */
  readonly params = input<Record<string, unknown>>({});
}
