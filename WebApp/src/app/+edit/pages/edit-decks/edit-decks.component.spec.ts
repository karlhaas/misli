import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDecksComponent } from './edit-decks.component';

describe('EditDecksComponent', () => {
  let component: EditDecksComponent;
  let fixture: ComponentFixture<EditDecksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDecksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
