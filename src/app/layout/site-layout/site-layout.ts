import { Component, afterNextRender, inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { ScrollTop } from 'primeng/scrolltop';

import { Lang } from '../../core/i18n';
import { PlatformService } from '../../core/platform.service';
import { SiteService } from '../../core/site.service';
import { SiteFooter } from '../site-footer/site-footer';
import { SiteHeader } from '../site-header/site-header';

/** Every page sits under /km or /en; this sets the language before the page renders (and prerenders). */
@Component({
  selector: 'ms-site-layout',
  imports: [RouterOutlet, TranslatePipe, ScrollTop, SiteHeader, SiteFooter],
  templateUrl: './site-layout.html',
  styleUrl: './site-layout.scss',
})
export class SiteLayout {
  constructor() {
    inject(SiteService).setLang(inject(ActivatedRoute).snapshot.data['lang'] as Lang);
    // The trial length the super admin set, for "30 days free" and the like (browser only; prerendered as 30)
    const platform = inject(PlatformService);
    afterNextRender(() => platform.load());
  }
}
