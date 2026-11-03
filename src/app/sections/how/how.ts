import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { Reveal } from '../../shared/reveal';

/** How it works: three numbered steps. */
@Component({
  selector: 'ms-how',
  imports: [TranslatePipe, Reveal],
  templateUrl: './how.html',
  styleUrl: './how.scss',
})
export class How {}
