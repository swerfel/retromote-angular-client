import { TestBed, inject } from '@angular/core/testing';

import { FirebaseStickiesService } from './firebase-stickies.service';

describe('FirebaseStickiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebaseStickiesService]
    });
  });

  it('should be created', inject([FirebaseStickiesService], (service: FirebaseStickiesService) => {
    expect(service).toBeTruthy();
  }));
});
