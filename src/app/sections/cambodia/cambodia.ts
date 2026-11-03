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
    { n: 1, icon: 'pi pi-language' },
    { n: 2, icon: 'pi pi-receipt' },
    { n: 3, icon: 'pi pi-money-bill' },
    { n: 4, icon: 'pi pi-qrcode' },
    { n: 5, icon: 'pi pi-file' },
    { n: 6, icon: 'pi pi-barcode' },
  ];
}
