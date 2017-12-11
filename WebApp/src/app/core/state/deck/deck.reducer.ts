import {
  ADD_DECK_ACTION,
  ADD_SLIDE_ACTION,
  DeckActions,
  UPDATE_SLIDE_DATA_ACTION
} from '@core/state/deck/deck.actions';
import { Deck } from '@core/model/deck';
import { Slide } from '@core/model/slide';

export interface State {
  readonly decks: Array<Deck>;
}

const initialState = {
  decks: [{
    uuid: 'deck1',
    name: 'My first deck',
    slides: [{
      uuid: 'a',
      type: 'simple-text',
      data: 'Hallo, ich bin die erste Slide'
    }, {
      uuid: 'b',
      type: 'simple-text',
      data: 'Zweite slide'
    }, {
      uuid: 'c',
      type: 'simple-text',
      data: 'Dritte'
    }]
  }, {
    uuid: 'deck2',
    name: 'My first deck',
    slides: [{
      uuid: 'e',
      type: 'simple-text',
      data: 'Hallo, ich bin ein anderes Deck'
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
            let newSlides = [...deck.slides];
            newSlides.splice(action.index, 0, action.slide);
            return {...deck, slides: newSlides};
          }
          return deck;
        })
      };
    case UPDATE_SLIDE_DATA_ACTION:
      return {
        decks: state.decks.map(deck => {
          const slide = deck.slides.find(slide1 => slide1.uuid === action.slidekUuid);
          if (!slide) {
            return deck;
          }
          return {
            ...deck, slides: [...deck.slides.map(slide2 => {
              return (slide2.uuid === action.slidekUuid) ? {...slide2, data: action.data} : slide2;
            })]
          };
        })
      };
    default:
      return state;
  }
}

export const getAllDecks = (state: State) => state.decks;

export function getDeckByUuid(uuid: string) {
  return (state: State) => state.decks.find(deck => deck.uuid === uuid);
}

export function getSlideByUuid(uuid: string) {
  return (state: State) => state.decks
    .reduce((slide: Slide, deck: Deck) => {
      return slide ? slide : deck.slides.find(slide2 => slide2.uuid === uuid);
    }, null);
}
