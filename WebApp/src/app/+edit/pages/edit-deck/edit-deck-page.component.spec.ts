import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeckPageComponent } from './edit-deck-page.component';

describe('EditDeckComponent', () => {
  let component: EditDeckPageComponent;
  let fixture: ComponentFixture<EditDeckPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDeckPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDeckPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
