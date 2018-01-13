import { TestBed, inject } from '@angular/core/testing';

import { SvgTransformerService } from './svg-transformer.service';

describe('SvgTransformerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SvgTransformerService]
    });
  });

  it('should be created', inject([SvgTransformerService], (service: SvgTransformerService) => {
    expect(service).toBeTruthy();
  }));
});
