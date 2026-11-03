import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { Reveal } from '../../shared/reveal';

/** Problems solved: before and with ModernStock. */
@Component({
  selector: 'ms-why',
  imports: [TranslatePipe, Reveal],
  templateUrl: './why.html',
  styleUrl: './why.scss',
})
export class Why {}
