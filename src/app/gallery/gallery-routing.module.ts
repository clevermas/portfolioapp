import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryPageComponent } from './gallery-page.component';
import { GalleryItemPageComponent } from './components/item-page/gallery-item-page.component';
import { GalleryListPageComponent } from './components/list-page/gallery-list-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from '../home/home-page.component';

const routes: Routes = [
  {
    path: 'gallery',
    component: GalleryPageComponent,
    children: [
      {
        path: '',
        component: GalleryListPageComponent
      },
      {
        path: ':id',
        component: GalleryItemPageComponent
      }
    ],
    data: {
      animation: 'GalleryPage'
    }
  }
];

@NgModule({
  imports: [
    BrowserAnimationsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
