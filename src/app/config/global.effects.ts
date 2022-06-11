import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';

import { ActionTypes, setCurrentBitcoins } from './global.action';
import { ApiService } from '../services/api.services';
import { GlobalService } from "../services/global.service"
@Injectable()

export class GeneralEffects {
  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    private globalService: GlobalService,
    private store$: Store,
  ) { }

  getCurrentBitcoins$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionTypes.getCurrentBitcoins),
      exhaustMap(() => {
        return this.apiService.get('currentBitcoins', {}).pipe(
          map(response => {
            console.log('response', response)
            return new setCurrentBitcoins({ currentBitcoins:  response })
          })
        );
      })
    ), { });
}

export const effects = [
  GeneralEffects,
];