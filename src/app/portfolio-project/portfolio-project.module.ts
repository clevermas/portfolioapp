import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { NgxCarouselModule } from 'ngx-carousel';

import { CoreModule } from '../core/core.module';

import { PortfolioProjectComponent } from './portfolio-project.component';
import { PortfolioProjectListComponent } from './portfolio-project-list/portfolio-project-list.component';

import { PortfolioProjectService } from './portfolio-project.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    NgxCarouselModule,
    CoreModule
  ],
  declarations: [
    PortfolioProjectComponent,
    PortfolioProjectListComponent
  ],
  providers: [
    PortfolioProjectService
  ],
  exports: [
    PortfolioProjectComponent,
    PortfolioProjectListComponent
  ]
})
export class PortfolioProjectModule { }
