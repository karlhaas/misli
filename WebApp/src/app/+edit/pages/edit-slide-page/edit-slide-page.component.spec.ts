import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSlidePageComponent } from './edit-slide-page.component';

describe('EditSlidePageComponent', () => {
  let component: EditSlidePageComponent;
  let fixture: ComponentFixture<EditSlidePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSlidePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSlidePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
