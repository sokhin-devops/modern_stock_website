import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonDirective, ButtonLabel } from 'primeng/button';

import { SiteService } from '../../core/site.service';

/** Headline, calls to action, and a small copy of the real app (dashboard, riel change, Telegram summary). */
@Component({
  selector: 'ms-hero',
  imports: [RouterLink, TranslatePipe, ButtonDirective, ButtonLabel],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  protected readonly site = inject(SiteService);
  protected readonly bars = [66, 58, 74, 63, 88, 80, 36];
  protected readonly days = ['28', '29', '30', '31', '01', '02', '03'];
}
