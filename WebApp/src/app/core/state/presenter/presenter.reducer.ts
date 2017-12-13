import { PresenterActions } from '@core/state/presenter/presenter.actions';

export interface State {}

const initialState = {};

export function reducer(state: State = initialState, action: PresenterActions) {
  switch (action.type) {
    default:
      return state;
  }
}
