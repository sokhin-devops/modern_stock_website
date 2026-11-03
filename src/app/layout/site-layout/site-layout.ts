import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

import { Lang } from '../../core/i18n';
import { SiteService } from '../../core/site.service';
import { SiteFooter } from '../site-footer/site-footer';
import { SiteHeader } from '../site-header/site-header';

/** Every page sits under /km or /en; this sets the language before the page renders (and prerenders). */
@Component({
  selector: 'ms-site-layout',
  imports: [RouterOutlet, SiteHeader, SiteFooter],
  templateUrl: './site-layout.html',
  styleUrl: './site-layout.scss',
})
export class SiteLayout {
  constructor() {
    inject(SiteService).setLang(inject(ActivatedRoute).snapshot.data['lang'] as Lang);
  }
}
