import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from '@angular/material';

import { CoreModule } from '../core/core.module';

import { PortfolioProjectModule } from '../portfolio-project/portfolio-project.module';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';

const appRoutes:Routes = [
  //{
  //  path: '',
  //  redirectTo: '/projects',
  //  pathMatch: 'full'
  //},
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'project/:id',
    component: ProjectPageComponent
  }
];

let RoutingModuleExports = RouterModule.forRoot(appRoutes);

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    CoreModule,
    RoutingModuleExports,
    PortfolioProjectModule
  ],
  declarations: [
    HomePageComponent,
    ProjectPageComponent,
  ]
})
export class RoutingModule {
}
