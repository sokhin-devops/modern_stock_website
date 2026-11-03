import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/** The root only hosts the router; every page is inside SiteLayout under /km or /en. */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
