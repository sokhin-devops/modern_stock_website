import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { SiteService } from '../../core/site.service';
import { Reveal } from '../../shared/reveal';

/** The blue closing band: Get started and Log in. */
@Component({
  selector: 'ms-cta-band',
  imports: [TranslatePipe, Reveal],
  templateUrl: './cta-band.html',
  styleUrl: './cta-band.scss',
})
export class CtaBand {
  protected readonly site = inject(SiteService);
}
