import { Component, ViewEncapsulation, HostBinding, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortfolioProjectService } from '../../portfolio-project/portfolio-project.service';
import { PortfolioProject } from '../../portfolio-project/portfolio-project';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/first';
import 'rxjs/add/observable/of';

import { routeChangeCustomAnimation } from '../_animations/routeChangeCustom.animation';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [routeChangeCustomAnimation]
})

export class ProjectPageComponent implements OnInit {
  @HostBinding('@routeChangeCustomAnimation') triggerAnimation;

  otherProjects$:Observable<PortfolioProject[]>;
  project$:Observable<PortfolioProject>;
  id:number;
  private subscribers:any = [];

  constructor(private projectsService:PortfolioProjectService,
              private route:ActivatedRoute) {
  }

  ngOnInit() {
    this.subscribers.push(
      this.route.params.subscribe(params => {
        this.id = +params['id'];
        this.getCurrentProjectData();
      }));
  }

  getCurrentProjectData() {

    this.otherProjects$ = this.projectsService
      .getList()
      .first()
      .switchMap(projects =>
        Observable.of(projects.filter(this.isNotCurrentProject)));

    this.project$ = this.projectsService
      .getList()
      .first()
      .switchMap(projects =>
        Observable.of(projects.filter(this.isCurrentProject)[0]));

  }

  isCurrentProject = project =>
     project.id === this.id;

  isNotCurrentProject = project =>
     project.id !== this.id;

}
