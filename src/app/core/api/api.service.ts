import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/finally';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class API {

  constructor(private http: Http) {}

  get(url, { mocked = false, mockedData = {}}) {
    let getSubject = new Subject<any>();

    if (mocked)
    {
      setTimeout(() =>
      {
        getSubject.next(mockedData), 100
        getSubject.complete();
      });
    }
    else
    {
      this.http.get(url)
          .finally(() => getSubject.complete())
          .subscribe(res => getSubject.next(res));
    }

    return getSubject.asObservable();
  }

}
