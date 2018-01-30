import { TestBed, inject } from '@angular/core/testing';

import { SocketIOConnectionService } from './socket-io-connection.service';

describe('SocketIOConnectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConnectionService]
    });
  });

  it('should be created', inject([SocketIOConnectionService], (service: SocketIOConnectionService) => {
    expect(service).toBeTruthy();
  }));
});
