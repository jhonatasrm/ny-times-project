import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { NewsService } from './news.service';

describe('NewsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
    }).compileComponents();
  });

  it('should be created', () => {
    const service: NewsService = TestBed.get(NewsService);
    expect(service).toBeTruthy();
  });
});