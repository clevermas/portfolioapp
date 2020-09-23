import { Component, ViewEncapsulation, HostBinding, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortfolioProjectService } from '../../portfolio-project/portfolio-project.service';
import { PortfolioProject } from '../../portfolio-project/portfolio-project';

import { PageLoaderService } from '../../core/page-loader/page-loader.service';

import { Observable } from 'rxjs';







import { routeChangeCustomAnimation } from '../_animations/routeChangeCustom.animation';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [routeChangeCustomAnimation]
})

export class ProjectPageComponent implements OnInit, OnDestroy {
  @HostBinding('@routeChangeCustomAnimation') triggerAnimation;

  otherProjects$:Observable<PortfolioProject[]>;
  project$:Observable<PortfolioProject>;
  id:number;

  private PROJECT_CHANGE_LOAD_TIMEOUT = 500;
  private subscribers:any = [];

  constructor(private projectsService:PortfolioProjectService,
              private route:ActivatedRoute,
              private loader:PageLoaderService) {
  }

  ngOnInit() {
    this.subscribers.push(
      this.route.params.subscribe(params => {
        this.id = +params['id'];
        this.loader.loading();
        this.subscribers.push(
        this.getCurrentProjectData()
             .finally(()=>this.loader.loadedAfter(this.PROJECT_CHANGE_LOAD_TIMEOUT))
              .subscribe());
      }));
  }

  ngOnDestroy() {
    this.subscribers.map(_=>_.unsubscribe());
  }

  getCurrentProjectData() {
      this.otherProjects$ = this.projectsService
        .getList()
        .first()
        .switchMap(projects =>
          Observable.of(projects.filter(this.isNotCurrentProject))); //.splice(0,4)

      this.project$ = this.projectsService
        .getList()
        .first()
        .switchMap(projects =>
          Observable.of(projects.filter(this.isCurrentProject)[0]));

    return Observable.merge(this.otherProjects$, this.project$);

  }

  isCurrentProject = project =>
  project.id === this.id;

  isNotCurrentProject = project =>
  project.id !== this.id;

}
