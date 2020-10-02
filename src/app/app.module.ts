import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { GalleryModule } from './gallery/gallery.module';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home/home-page.component';
import { GalleryRoutingModule } from './gallery/gallery-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    SharedModule,
    AppRoutingModule,
    GalleryRoutingModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    GalleryModule
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
