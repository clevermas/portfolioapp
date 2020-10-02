import { Component } from '@angular/core';
import { routeChangeCustomAnimation } from '../../../shared/animations/routeChangeCustom.animation';

@Component({
  selector: 'app-gallery-list-page',
  templateUrl: './gallery-list-page.component.html',
  styleUrls: ['./gallery-list-page.component.scss'],
  animations: [routeChangeCustomAnimation]
})
export class GalleryListPageComponent {
}
