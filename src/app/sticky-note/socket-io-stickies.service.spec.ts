import { TestBed, inject } from '@angular/core/testing';

import { SocketIOStickiesService } from './socket-io-stickies.service';

describe('SocketIOStickiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocketIOStickiesService]
    });
  });

  it('should be created', inject([SocketIOStickiesService], (service: SocketIOStickiesService) => {
    expect(service).toBeTruthy();
  }));
});
