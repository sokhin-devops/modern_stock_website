import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

import { PlatformService } from '../../core/platform.service';
import { SeoService } from '../../core/seo.service';
import { PageHero } from '../../sections/page-hero/page-hero';

type LegalKind = 'terms' | 'privacy';

const SECTIONS: Record<LegalKind, string[]> = {
  terms: ['Account', 'Business', 'Plans', 'End', 'Use', 'Contact'],
  privacy: ['Collect', 'Use', 'Share', 'Keep', 'Rights'],
};

/** Terms of use and Privacy policy (PLAIN.md 12.1 #5), linked from the sign-up form. Draft text, to be reviewed. */
@Component({
  selector: 'ms-legal-page',
  imports: [TranslatePipe, PageHero],
  templateUrl: './legal-page.html',
  styleUrl: './legal-page.scss',
})
export class LegalPage {
  protected readonly page = inject(ActivatedRoute).snapshot.data['page'] as LegalKind;
  protected readonly sections = SECTIONS[this.page];
  protected readonly platform = inject(PlatformService);

  constructor() {
    inject(SeoService).set(this.page + 'Title', null, this.page);
  }
}
