import { Subject } from 'rxjs';

import { Component, OnInit, OnChanges, Input, ViewEncapsulation, SimpleChange } from '@angular/core';

import { GalleryService } from '../../services/gallery.service';
import { GalleryItemModel } from '../item/gallery-item.model';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GalleryListComponent implements OnInit, OnChanges {
  projects: GalleryItemModel[];

  // the current view state (portfolio project view state)
  @Input() view: string;

  @Input('projects') projectsBinding: GalleryItemModel[];

  private projectsSubscriber = new Subject<GalleryItemModel[]>().subscribe();

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

  constructor(private projectsService: GalleryService) {
  }

  ngOnInit() {
    this.getProjectsList();
  }

  ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
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
