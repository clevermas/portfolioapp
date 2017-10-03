import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { MaterialModule, MdProgressSpinnerModule } from '@angular/material';

import 'hammerjs';

import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    RouterModule,
    RoutingModule,
    MaterialModule,
    MdProgressSpinnerModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
