import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from './core/core.module';
import { HomePageComponent } from './home/home-page.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: []
})
export class AppRoutingModule {
}
