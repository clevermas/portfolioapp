import { Component, OnInit, OnChanges, Input, ViewEncapsulation, SimpleChange } from '@angular/core';

import { PortfolioProjectService } from '../portfolio-project.service';
import { PortfolioProject } from '../portfolio-project';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-portfolio-project-list',
  templateUrl: './portfolio-project-list.component.html',
  styleUrls: ['./portfolio-project-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortfolioProjectListComponent implements OnInit, OnChanges {
  projects:PortfolioProject[];

  // the current view state (home page or project page list)
  @Input()
    view:string;

  @Input('projects')
    projectsBinding:PortfolioProject[];

  private projectsSubscriber = new Subject<PortfolioProject[]>().subscribe();

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
      .subscribe(projects =>
        this.projects = projects);
  }
}
