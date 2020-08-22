import { TestBed } from '@angular/core/testing';

import { BpegmServiceService } from './bpegm-service.service';

describe('BpegmServiceService', () => {
  let service: BpegmServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BpegmServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
