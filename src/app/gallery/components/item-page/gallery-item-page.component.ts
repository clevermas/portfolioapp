import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { GalleryService } from '../../services/gallery.service';
import { PageLoaderService } from '../../../core/page-loader/page-loader.service';
import { GalleryItemModel } from '../item/gallery-item.model';

@Component({
  selector: 'app-gallery-item-page',
  templateUrl: './gallery-item-page.component.html',
  styleUrls: ['./gallery-item-page.component.scss'],
})

export class GalleryItemPageComponent implements OnInit, OnDestroy {
  item$: Observable<GalleryItemModel>;
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
        this.item$ = this.projectsService.getItem(this.id)
          .pipe(
            finalize(() => this.loader.loadedAfter(this.PROJECT_CHANGE_LOAD_TIMEOUT))
          );
      }));
  }

  ngOnDestroy() {
    this.subscribers.map(_ => _.unsubscribe());
  }
}
