import { Action } from '@ngrx/store';
import { Deck } from '@core/model/deck';
import { Slide } from '@core/model/slide';

export const ADD_DECK_ACTION = 'ADD_DECK_ACTION';
export const ADD_SLIDE_ACTION = 'ADD_SLIDE_ACTION';

export class AddDeckAction implements Action {
  readonly type = ADD_DECK_ACTION;

  constructor(public deck: Deck) {
  }
}

export class AddSlideAction implements Action {
  readonly type = ADD_SLIDE_ACTION;

  constructor(public slide: Slide,
              public deckUuid: string,
              public index: number) {
  }
}

export type DeckActions =
  | AddDeckAction
  | AddSlideAction;
