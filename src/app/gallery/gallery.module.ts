import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryItemPageComponent } from './components/item-page/gallery-item-page.component';
import { GalleryItemComponent } from './components/item/gallery-item.component';
import { GalleryListComponent } from './components/list/gallery-list.component';
import { GalleryPageComponent } from './gallery-page.component';
import { GalleryListPageComponent } from './components/list-page/gallery-list-page.component';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    SharedModule,
    GalleryRoutingModule
  ],
  declarations: [
    GalleryPageComponent,
    GalleryItemPageComponent,
    GalleryListComponent,
    GalleryItemComponent,
    GalleryListPageComponent
  ]
})
export class GalleryModule { }
