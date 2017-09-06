import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { PageLoader } from './page-loader';

@Injectable()
export class PageLoaderService {
  private loaderSubject = new Subject<PageLoader>();
  public state$ = this.loaderSubject.asObservable();

  constructor() {}

  showUponTimeout(time = 300) {
    this.show();
    setTimeout(() => this.hide(), time);
  }

  show() {
    this.loaderSubject.next(<PageLoader>{show: true});
  }
  hide() {
    this.loaderSubject.next(<PageLoader>{show: false});
  }

}
