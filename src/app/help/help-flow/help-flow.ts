import { Component, computed, inject, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { SiteService } from '../../core/site.service';
import { HelpStage } from '../help-types';

/**
 * A workflow as numbered boxes joined by arrows (down the page on phones), then the side endings (rejected, voided...)
 * after "Or it ends as". An ordered list, so screen readers read the steps in order.
 */
@Component({
  selector: 'ms-help-flow',
  imports: [TranslatePipe],
  templateUrl: './help-flow.html',
  styleUrl: './help-flow.scss',
})
export class HelpFlow {
  readonly stages = input.required<HelpStage[]>();
  /** Smaller boxes, for the workflow cards of the Help Center. */
  readonly compact = input(false);
  protected readonly lang = inject(SiteService).lang;
  protected readonly main = computed(() => this.stages().filter((s) => !s.side));
  protected readonly side = computed(() => this.stages().filter((s) => s.side));
}
