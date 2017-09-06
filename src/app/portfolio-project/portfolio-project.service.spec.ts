import { TestBed, inject } from '@angular/core/testing';

import { PortfolioProjectService } from './portfolio-project.service';

describe('PortfolioProjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PortfolioProjectService]
    });
  });

  it('should be created', inject([PortfolioProjectService], (service: PortfolioProjectService) => {
    expect(service).toBeTruthy();
  }));
});
