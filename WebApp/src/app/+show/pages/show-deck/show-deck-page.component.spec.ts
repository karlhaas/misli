import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDeckPageComponent } from './show-deck-page.component';

describe('PresenterComponent', () => {
  let component: ShowDeckPageComponent;
  let fixture: ComponentFixture<ShowDeckPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDeckPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDeckPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
