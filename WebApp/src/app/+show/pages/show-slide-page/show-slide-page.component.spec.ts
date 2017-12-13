import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSlidePageComponent } from './show-slide-page.component';

describe('ShowSlidePageComponent', () => {
  let component: ShowSlidePageComponent;
  let fixture: ComponentFixture<ShowSlidePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSlidePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSlidePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
