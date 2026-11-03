import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { Reveal } from '../../shared/reveal';

/** Cambodia-specific details, next to a bilingual receipt (the 400-riel change example from PLAIN.md 11.6). */
@Component({
  selector: 'ms-cambodia',
  imports: [TranslatePipe, Reveal],
  templateUrl: './cambodia.html',
  styleUrl: './cambodia.scss',
})
export class Cambodia {
  protected readonly points = [
    { n: 1, icon: 'translate' },
    { n: 2, icon: 'receipt_long' },
    { n: 3, icon: 'currency_exchange' },
    { n: 4, icon: 'qr_code_2' },
    { n: 5, icon: 'request_quote' },
    { n: 6, icon: 'qr_code_scanner' },
  ];
}
