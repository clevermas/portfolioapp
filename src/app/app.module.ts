import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { MaterialModule, MdProgressSpinnerModule } from '@angular/material';

import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    RouterModule,
    RoutingModule,
    MaterialModule,
    MdProgressSpinnerModule,
  ],
  exports: [],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
