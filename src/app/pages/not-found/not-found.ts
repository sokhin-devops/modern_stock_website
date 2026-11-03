import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

import { SeoService } from '../../core/seo.service';
import { SiteService } from '../../core/site.service';

/** Shown for unknown addresses inside the site. */
@Component({
  selector: 'ms-not-found',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss',
})
export class NotFound {
  protected readonly site = inject(SiteService);

  constructor() {
    inject(SeoService).set('notFoundTitle', null, '404');
  }
}
