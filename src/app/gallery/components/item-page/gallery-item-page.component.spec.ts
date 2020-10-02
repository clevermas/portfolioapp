import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryItemPageComponent } from './gallery-item-page.component.js';

describe('GalleryItemPageComponent', () => {
  let component: GalleryItemPageComponent;
  let fixture: ComponentFixture<GalleryItemPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryItemPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
