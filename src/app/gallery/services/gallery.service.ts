import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../../core/api/api.service';
import { GalleryItemModel } from '../components/item/gallery-item.model';
import { galleryPortfolioStub } from './gallery-portfolio.stub';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  getList(): Observable<GalleryItemModel[]> {
    return this.api.get('', { mocked: true, mockedData: galleryPortfolioStub });
  }

  getItem(id: number): Observable<GalleryItemModel> {
    const mockedData = galleryPortfolioStub.find(item => item.id === id);
    return this.api.get('', { mocked: true, mockedData });
  }

  constructor(private api: API) {
  }

}
