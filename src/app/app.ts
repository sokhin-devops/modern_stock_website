import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SplashService } from './core/splash.service';

/** The root only hosts the router; every page is inside SiteLayout under /km or /en. */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  constructor() {
    inject(SplashService).hideWhenReady();
  }
}
