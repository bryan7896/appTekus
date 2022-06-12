import {
  ActionReducer,
  ActionReducerMap,
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
  daysBitcoin: Array<any>,
  detailsOfTheDay: Array<any>,
  currentPage: number,
  selectedDate: Object,
  typeOfCurrency: Object,
}

//Initialization of the variables that will be used in the state
export const inicialStateGlobal: GlobalState = {
  currentBitcoins: [],
  daysBitcoin: [],
  detailsOfTheDay: [],
  currentPage: 1,
  selectedDate: {},
  typeOfCurrency: {name: 'USD', TRM: 1, symbol: '$'},
};

export function globalReducer(state: GlobalState = inicialStateGlobal, action: actions): GlobalState {
  return state;
}

//Cases of actions to set the state variables
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
      case ActionTypes.setSelectedDate:
        return {
          ...state,
          selectedDate: action.payload.selectedDate
        };
      case ActionTypes.setDaysBitcoin:
        return {
          ...state,
          daysBitcoin: action.payload.daysBitcoin
        };
      case ActionTypes.setDetailsOfTheDay:
        return {
          ...state,
          detailsOfTheDay: action.payload.detailsOfTheDay
        };
      case ActionTypes.setTypeOfCurrency:
        return {
          ...state,
          typeOfCurrency: action.payload.typeOfCurrency
        };
      default:
        return reducer(state, action);
    }

  };
}


export const metaReducers: MetaReducer<State>[] = !environment.production ? [globalMetaReducer] : [globalMetaReducer];

