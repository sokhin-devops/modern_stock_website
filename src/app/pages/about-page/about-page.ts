import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { SeoService } from '../../core/seo.service';
import { CtaBand } from '../../sections/cta-band/cta-band';
import { PageHero } from '../../sections/page-hero/page-hero';
import { Reveal } from '../../shared/reveal';

/** About us (PLAIN.md 12.1 #3): project story, team, university. Team details are placeholders for the team to fill. */
@Component({
  selector: 'ms-about-page',
  imports: [TranslatePipe, Reveal, PageHero, CtaBand],
  templateUrl: './about-page.html',
  styleUrl: './about-page.scss',
})
export class AboutPage {
  protected readonly team = [
    { initials: 'M1', role: 'about.roleLead' },
    { initials: 'M2', role: 'about.roleWeb' },
    { initials: 'M3', role: 'about.roleDesign' },
    { initials: 'M4', role: 'about.roleQa' },
  ];

  constructor() {
    inject(SeoService).set('aboutTitle', 'aboutDescription', 'about');
  }
}
