import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { observeOn } from 'rxjs/operators';
import { asyncScheduler } from 'rxjs/internal/scheduler/async';

@Injectable()
export class PageLoaderService {
  private loaderSubject = new Subject<string>();
  public state$ = this.loaderSubject.asObservable().pipe(
    observeOn(asyncScheduler)
  );

  constructor() {}

  showUponTimeout(time = 300) {
    this.loading();
    setTimeout(() => this.loaded(), time);
  }

  loading() {
    this.loaderSubject.next('loading');
  }
  loaded() {
    this.loaderSubject.next('loaded');
  }

  loadedAfter(time = 300) {
    setTimeout(() => this.loaded(), time);
  }
}
