import { Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { routeChangeCustomAnimation } from '../_animations/routeChangeCustom.animation';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [routeChangeCustomAnimation]
})

export class HomePageComponent {
  @HostBinding('@routeChangeCustomAnimation') triggerAnimation;
}
