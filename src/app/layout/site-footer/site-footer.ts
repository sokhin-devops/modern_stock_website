import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

import { SiteService } from '../../core/site.service';

/** Footer: product, company, legal and social links. */
@Component({
  selector: 'ms-site-footer',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.scss',
})
export class SiteFooter {
  protected readonly site = inject(SiteService);
  protected readonly year = 2026;
}
