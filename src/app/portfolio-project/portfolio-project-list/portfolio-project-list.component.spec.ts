import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioProjectListComponent } from './portfolio-project-list.component';

describe('PortfolioProjectListComponent', () => {
  let component: PortfolioProjectListComponent;
  let fixture: ComponentFixture<PortfolioProjectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioProjectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioProjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
