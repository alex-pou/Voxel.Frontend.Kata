import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { TvShowService } from './tv-show.service';

describe('TvShowService', () => {
  let service: TvShowService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(TvShowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
