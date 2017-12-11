import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDecksPageComponent } from './show-decks-page.component';

describe('EditDecksComponent', () => {
  let component: ShowDecksPageComponent;
  let fixture: ComponentFixture<ShowDecksPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDecksPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDecksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
