import { TestBed, inject } from '@angular/core/testing';

import { StickiesService } from './stickies.service';

describe('StickiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StickiesService]
    });
  });

  it('should be created', inject([StickiesService], (service: StickiesService) => {
    expect(service).toBeTruthy();
  }));
});
