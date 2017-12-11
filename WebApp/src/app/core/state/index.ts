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

export const coreMetaReducers: MetaReducer<CoreState>[] = !environment.production
  ? [logger, storeFreeze]
  : [];

export const getDecksState = (state: CoreState) => state.decks;
export const getAllDecks = createSelector(getDecksState, fromDeck.getAllDecks);
