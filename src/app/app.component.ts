import { Component, ViewEncapsulation } from '@angular/core';

import { PageLoaderService, pageLoaderAnimation, pageLoaderSpinnerAnimation } from './core/page-loader/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    pageLoaderAnimation,
    pageLoaderSpinnerAnimation
  ],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  constructor(public loader: PageLoaderService) {
  }

}
