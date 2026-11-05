import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonDirective, ButtonLabel } from 'primeng/button';

import { PlatformService } from '../../core/platform.service';
import { SiteService } from '../../core/site.service';
import { Reveal } from '../../shared/reveal';

/** The blue closing band: Get started and Log in. */
@Component({
  selector: 'ms-cta-band',
  imports: [TranslatePipe, Reveal, ButtonDirective, ButtonLabel],
  templateUrl: './cta-band.html',
  styleUrl: './cta-band.scss',
})
export class CtaBand {
  protected readonly site = inject(SiteService);
  protected readonly platform = inject(PlatformService);
}
