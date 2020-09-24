import { Component, OnInit, OnChanges, Input, SimpleChange, ViewEncapsulation } from '@angular/core';
import { GalleryItemModel } from './gallery-item.model';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss']
  //,
  //encapsulation: ViewEncapsulation.None
})
export class GalleryItemComponent implements OnInit, OnChanges {

  @Input()
  view: string;

  @Input('instance')
  project: GalleryItemModel;

  viewClass: string = '';

  //project:GalleryItemModel = <GalleryItemModel>{};

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
    for (let propName in changes) {
      switch (propName) {
        case 'view':
          this.viewClass = 'view-' + changes['view'].currentValue;
          break;
      }
    }
  }
}
