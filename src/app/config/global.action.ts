import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export enum ActionTypes {
    initialState = '[global] initialState',
    ApiError = '[global] ApiError',
    setCurrentBitcoins = '[global] setCurrentBitcoins',
    getCurrentBitcoins = '[global] getCurrentBitcoins',
    setCurrentPage = '[global] setCurrentPage',
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


export type actions =
    ApiError
    | setCurrentBitcoins
    | getCurrentBitcoins
    | setCurrentPage