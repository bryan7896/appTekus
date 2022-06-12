import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, exhaustMap, withLatestFrom } from 'rxjs/operators';

import { ActionTypes, setCurrentBitcoins, setDaysBitcoin, setDetailsOfTheDay } from './global.action';
import { ApiService } from '../services/api.services';
import { GlobalService } from "../services/global.service"
import { GlobalState } from './global.reducer';
@Injectable()

export class GeneralEffects {
  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    private globalService: GlobalService,
    private store$: Store<GlobalState>,
  ) { }

  //Fetch the last 2 bitcoin records
  getCurrentBitcoins$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionTypes.getCurrentBitcoins),
      exhaustMap(() => {
        return this.apiService.get('currentBitcoins', {}).pipe(
          map(response => {
            this.globalService.setStorage('currentBitcoins', { currentBitcoins: response })
            return new setCurrentBitcoins({ currentBitcoins: response })
          })
        );
      })
    ), {});

  //Bring the last bircoit record of the last 5 days, this effect has pagination
  getDaysBitcoin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionTypes.getDaysBitcoin),
      withLatestFrom(this.store$.select(state => state.currentPage)),
      exhaustMap((action) => {
        let filter = { where: { page: action[1] } };
        return this.apiService.get('daysBitcoin', filter).pipe(
          map(response => {
            this.globalService.setStorage('daysBitcoin', { daysBitcoin: response })
            return new setDaysBitcoin({ daysBitcoin: response })
          })
        );
      })
    ), {});

  //Bring the last 7 bitcoins data for the selected day, this effect has pagination
  getDetailsOfTheDay$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionTypes.getDetailsOfTheDay),
      withLatestFrom(this.store$.select(state => state.currentPage), this.store$.select(state => state.selectedDate)),
      exhaustMap((action: any) => {
        let filter = {
          where: { page: action[1], dateUser: action[2].createdAt ?? new Date() }
        };
        return this.apiService.get('bitcoins', filter).pipe(
          map(response => {
            this.globalService.setStorage('detailsOfTheDay', { detailsOfTheDay: response })
            return new setDetailsOfTheDay({ detailsOfTheDay: response })
          })
        );
      })
    ), {});
}

export const effects = [
  GeneralEffects,
];