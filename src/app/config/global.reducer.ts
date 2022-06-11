import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { ActionTypes, actions } from './global.action';
import { environment } from '../../environments/environment';



export interface State {
}

export const reducers: ActionReducerMap<State> = {
};

export interface GlobalState {
  currentBitcoins: Array<any>,
  currentPage: number,
}

export const inicialStateGlobal: GlobalState = {
  currentBitcoins: [],
  currentPage: 1,
};

export function globalReducer(state: GlobalState = inicialStateGlobal, action: actions): GlobalState {
  return state;
}

export function globalMetaReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state: State, action: any) {
    switch (action.type) {
      case ActionTypes.initialState:
        return {
          ...inicialStateGlobal
        };
      case ActionTypes.setCurrentBitcoins:
        return {
          ...state,
          currentBitcoins: action.payload.currentBitcoins
        };
      case ActionTypes.setCurrentPage:
        return {
          ...state,
          currentPage: action.payload.currentPage
        };
      default:
        return reducer(state, action);
    }

  };
}


export const metaReducers: MetaReducer<State>[] = !environment.production ? [globalMetaReducer] : [globalMetaReducer];

