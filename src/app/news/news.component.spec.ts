import { NewsService } from './../news.service';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsComponent } from './news.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('NewsComponent', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsComponent ],
      imports: [HttpClientModule],
      providers: [NewsService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
