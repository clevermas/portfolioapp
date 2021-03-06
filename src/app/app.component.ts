import { Component, ViewEncapsulation } from '@angular/core';
import { PageLoaderService, pageLoaderAnimation, pageLoaderSpinnerAnimation } from './core/page-loader/';
import { RouterOutlet } from '@angular/router';
import { routeAnimation } from './shared/animations/route.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    routeAnimation,
    pageLoaderSpinnerAnimation,
    pageLoaderAnimation
  ],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  constructor(public loader: PageLoaderService) {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
