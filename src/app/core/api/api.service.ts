import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class API {

  constructor(private http: HttpClient) {
  }

  get(url, {mocked = false, mockedData = {}}: { mocked: boolean, mockedData: any }) {
    return mocked ? of(mockedData) : this.http.get(url);
  }

}
