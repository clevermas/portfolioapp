import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { GalleryItemModel } from './gallery-item.model';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss']
})
export class GalleryItemComponent implements OnChanges {

  @Input() view = 'default';

  @Input('instance') item: GalleryItemModel;

  viewClass = 'view-default';

  ngOnChanges(changes: SimpleChanges) {
    if (changes.view && changes.view.previousValue !== changes.view.currentValue) {
      this.viewClass = 'view-' + changes['view'].currentValue;
    }
  }
}
