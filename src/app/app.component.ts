import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

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

export class AppComponent implements OnInit, OnDestroy {
  constructor(public loader:PageLoaderService) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
