import { ADD_DECK_ACTION, ADD_SLIDE_ACTION, DeckActions } from '@core/state/deck/deck.actions';
import { Deck } from '@core/model/deck';

export interface State {
  readonly decks: Array<Deck>;
}

const initialState = {
  decks: [{
    uuid: 'abcd',
    name: 'My first deck',
    slides: [{
      type: 'simple-text',
      data: 'Hallo, ich bin die erste Slide'
    }, {
      type: 'simple-text',
      data: 'Zweite slide'
    }, {
      type: 'simple-text',
      data: 'Dritte'
    }]
  }]
};

export function reducer(state: State = initialState, action: DeckActions) {
  switch (action.type) {
    case ADD_DECK_ACTION:
      return {decks: state.decks.concat(action.deck)};
    case ADD_SLIDE_ACTION:
      return {
        decks: state.decks.map(deck => {
          if (deck.uuid === action.deckUuid) {
            return {...deck, slides: [...deck.slides].splice(action.index, 0, action.slide)};
          }
          return deck;
        })
      };
    default:
      return state;
  }
}

export const getAllDecks = (state: State) => state.decks;
