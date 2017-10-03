import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Component, OnInit, OnChanges, Input, ViewEncapsulation, SimpleChange } from '@angular/core';

import { NgxCarousel } from 'ngx-carousel';

import { PortfolioProjectService } from '../portfolio-project.service';
import { PortfolioProject } from '../portfolio-project';


@Component({
  selector: 'app-portfolio-project-list',
  templateUrl: './portfolio-project-list.component.html',
  styleUrls: ['./portfolio-project-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortfolioProjectListComponent implements OnInit, OnChanges {
  projects:PortfolioProject[];

  // the current view state (portfolio project view state)
  @Input()
    view:string;

  @Input('projects')
    projectsBinding:PortfolioProject[];

  private projectsSubscriber = new Subject<PortfolioProject[]>().subscribe();

  private CAROUSEL_OPTIONS_DEFAULT = {
    grid: {xs: 1, sm: 3, md: 4, lg: 4, all: 0},
    slide: 1,
    speed: 400,
    interval: 6000,
    // FIXME: Find another library. Slide pointer does not work
    point: false,
    load: 2,
    touch: true,
    loop: true,
    dynamicLength: true
  };

  private carouselOptions = Object.assign({}, this.CAROUSEL_OPTIONS_DEFAULT);

  constructor(private projectsService:PortfolioProjectService) {
  }

  ngOnInit() {
    this.getProjectsList();
  }

  ngOnChanges(changes:{ [propertyName: string]: SimpleChange }) {
    if (changes['projectsBinding']) {
      this.projectsSubscriber.unsubscribe();
      this.projects = changes['projectsBinding'].currentValue;
    }
  }

  getProjectsList() {
    this.projectsSubscriber = this.projectsService
      .getList()
      .subscribe(projects => {
        this.projects = projects;
      });
  }

}
