import { Component, ViewEncapsulation, HostBinding, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryService } from '../../services/gallery.service';
import { GalleryItemModel } from '../item/gallery-item.model';

import { PageLoaderService } from '../../../core/page-loader/page-loader.service';

import { Observable, concat, of } from 'rxjs';
import { finalize, first, switchMap } from 'rxjs/operators';

import { routeChangeCustomAnimation } from '../../../shared/animations/routeChangeCustom.animation';

@Component({
  selector: 'app-gallery-item-page',
  templateUrl: './gallery-item-page.component.html',
  styleUrls: ['./gallery-item-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [routeChangeCustomAnimation]
})

export class GalleryItemPageComponent implements OnInit, OnDestroy {
  @HostBinding('@routeChangeCustomAnimation') triggerAnimation;

  otherProjects$: Observable<GalleryItemModel[]>;
  project$: Observable<GalleryItemModel>;
  id: number;

  private PROJECT_CHANGE_LOAD_TIMEOUT = 500;
  private subscribers: any = [];

  constructor(private projectsService: GalleryService,
              private route: ActivatedRoute,
              private loader: PageLoaderService) {
  }

  ngOnInit() {
    this.subscribers.push(
      this.route.params.subscribe(params => {
        this.id = +params['id'];
        this.loader.loading();
        const projectData = this.getCurrentProjectData()
          .pipe(
            finalize(() => this.loader.loadedAfter(this.PROJECT_CHANGE_LOAD_TIMEOUT))
          );
        this.subscribers.push(projectData.subscribe());
      }));
  }

  ngOnDestroy() {
    this.subscribers.map(_ => _.unsubscribe());
  }

  getCurrentProjectData() {
    this.otherProjects$ = this.projectsService
      .getList()
      .pipe(
        first(),
        switchMap(projects =>
          of(projects.filter(this.isNotCurrentProject) // .splice(0,4)
          )
        )
      );

    this.project$ = this.projectsService
      .getList()
      .pipe(
        first(),
        switchMap(projects =>
          of(projects.filter(this.isCurrentProject)[0] // .splice(0,4)
          )
        )
      );

    return concat(this.otherProjects$, this.project$);

  }

  isCurrentProject = project =>
    project.id === this.id

  isNotCurrentProject = project =>
    project.id !== this.id

}
