import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export enum ActionTypes {
    initialState = '[global] initialState',
    ApiError = '[global] ApiError',
    setCurrentBitcoins = '[global] setCurrentBitcoins',
    getCurrentBitcoins = '[global] getCurrentBitcoins',
    setCurrentPage = '[global] setCurrentPage',
    setSelectedDate = '[global] setSelectedDate',
    getDaysBitcoin = '[global] getDaysBitcoin',
    setDaysBitcoin = '[global] setDaysBitcoin',
    getDetailsOfTheDay = '[global] getDetailsOfTheDay',
    setDetailsOfTheDay = '[global] setDetailsOfTheDay',
    setTypeOfCurrency = '[global] setTypeOfCurrency',
}


export class initialState implements Action {
    readonly type = ActionTypes.initialState;
}
export class ApiError implements Action {
    readonly type = ActionTypes.ApiError;
    constructor(public payload: { error: HttpErrorResponse }) { }
}

export class setCurrentBitcoins implements Action {
    readonly type = ActionTypes.setCurrentBitcoins;
    constructor(public payload: { currentBitcoins: Array<any> }) { }
}

export class getCurrentBitcoins implements Action {
    readonly type = ActionTypes.getCurrentBitcoins;
}
export class setCurrentPage implements Action {
    readonly type = ActionTypes.setCurrentPage;
    constructor(public payload: { currentPage: number }) { }
}
export class setSelectedDate implements Action {
    readonly type = ActionTypes.setSelectedDate;
    constructor(public payload: { selectedDate: Object }) { }
}
export class setTypeOfCurrency implements Action {
    readonly type = ActionTypes.setTypeOfCurrency;
    constructor(public payload: { typeOfCurrency: Object }) { }
}
export class getDaysBitcoin implements Action {
    readonly type = ActionTypes.getDaysBitcoin;
}
export class setDaysBitcoin implements Action {
    readonly type = ActionTypes.setDaysBitcoin;
    constructor(public payload: { daysBitcoin: Array<any> }) { }
}
export class setDetailsOfTheDay implements Action {
    readonly type = ActionTypes.setDetailsOfTheDay;
    constructor(public payload: { detailsOfTheDay: Array<any> }) { }
}
export class getDetailsOfTheDay implements Action {
    readonly type = ActionTypes.getDetailsOfTheDay;
}


export type actions =
    ApiError
    | setCurrentBitcoins
    | getCurrentBitcoins
    | setCurrentPage
    | setSelectedDate
    | getDaysBitcoin
    | getDetailsOfTheDay
    | setDetailsOfTheDay
    | setDaysBitcoin
    | setTypeOfCurrency