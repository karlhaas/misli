import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducer, ActionReducerMap, createSelector, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import * as fromDeck from './deck/deck.reducer';
import { environment } from '../../../environments/environment';

export interface CoreState {
  decks: fromDeck.State;
  routerReducer: RouterReducerState;
}

export const coreReducers: ActionReducerMap<CoreState> = {
  decks: fromDeck.reducer,
  routerReducer: routerReducer,
};

export function logger(reducer: ActionReducer<CoreState>): ActionReducer<CoreState> {
  return function(state: CoreState, action: any): CoreState {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export function localStorageStorer(reducer: ActionReducer<CoreState>): ActionReducer<CoreState> {
  return function(state: CoreState, action: any): CoreState {
    console.log('state', state);
    console.log('action', action);
    const result = reducer(state, action);
    localStorage.setItem('MY_DATA', JSON.stringify(result));
    return result;
  };
}

export const coreMetaReducers: MetaReducer<CoreState>[] = !environment.production
  ? [logger, localStorageStorer, storeFreeze]
  : [];

export const getDecksState = (state: CoreState) => state.decks;
export const getAllDecks = createSelector(getDecksState, fromDeck.getAllDecks);
export function getDeckByUuid(uuid: string) {
  return createSelector(getDecksState, fromDeck.getDeckByUuid(uuid));
}
export function getSlideByUuid(uuid: string) {
  return createSelector(getDecksState, fromDeck.getSlideByUuid(uuid));
}
