import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { SeoService } from '../../core/seo.service';
import { CtaBand } from '../../sections/cta-band/cta-band';
import { PageHero } from '../../sections/page-hero/page-hero';
import { Reveal } from '../../shared/reveal';

/** About us (PLAIN.md 12.1 #3): project story, the team, and the university. Names are shown as written in English. */
@Component({
  selector: 'ms-about-page',
  imports: [TranslatePipe, Reveal, PageHero, CtaBand],
  templateUrl: './about-page.html',
  styleUrl: './about-page.scss',
})
export class AboutPage {
  protected readonly team = [
    { name: 'Sing Sokhin', initials: 'SS', role: 'about.roleDev' },
    { name: 'Meas Monyreth', initials: 'MM', role: 'about.roleDev' },
    { name: 'Vanak Khavy', initials: 'VK', role: 'about.roleDev' },
    { name: 'Visal', initials: 'V', role: 'about.roleDev' },
  ];

  constructor() {
    inject(SeoService).set('aboutTitle', 'aboutDescription', 'about');
  }
}
