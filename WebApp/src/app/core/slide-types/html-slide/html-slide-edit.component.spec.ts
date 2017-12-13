import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlSlideEditComponent } from './html-slide-edit.component';

describe('HtmlSlideEditComponent', () => {
  let component: HtmlSlideEditComponent;
  let fixture: ComponentFixture<HtmlSlideEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlSlideEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlSlideEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
