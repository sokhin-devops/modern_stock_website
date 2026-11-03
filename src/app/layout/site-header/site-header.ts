import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonDirective, ButtonIcon, ButtonLabel } from 'primeng/button';
import { Drawer } from 'primeng/drawer';
import { Tooltip } from 'primeng/tooltip';

import { SiteService } from '../../core/site.service';
import { ThemeModeService } from '../../core/theme-mode.service';
import { Flag } from '../../shared/flag/flag';

/**
 * Sticky header: logo, pages, language, dark mode, Log in, Start free. On phones and tablets a menu button opens
 * the pages in a PrimeNG drawer from the side.
 */
@Component({
  selector: 'ms-site-header',
  imports: [RouterLink, RouterLinkActive, TranslatePipe, ButtonDirective, ButtonIcon, ButtonLabel, Drawer, Tooltip, Flag],
  host: { '(window:scroll)': 'onScroll()' },
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss',
})
export class SiteHeader {
  protected readonly site = inject(SiteService);
  protected readonly theme = inject(ThemeModeService);
  protected readonly scrolled = signal(false);
  protected readonly menuOpen = signal(false);

  protected readonly pages = [
    { page: 'features', key: 'nav.features' },
    { page: 'pricing', key: 'nav.pricing' },
    { page: 'faq', key: 'nav.faq' },
    { page: 'about', key: 'nav.about' },
    { page: 'contact', key: 'nav.contact' },
  ];

  protected onScroll(): void {
    this.scrolled.set(window.scrollY > 4);
  }
}
