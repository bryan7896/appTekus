import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';

import { ActionTypes, getContador, putContador, setContador } from './global.action';
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

  getContador$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionTypes.getContador),
      exhaustMap(() => {
        return this.apiService.get('contadors', {}).pipe(
          map(response => {
            console.log('response', response[0].number)
            return new setContador({ contador:  response[0].number })
          })
        );
      })
    ), { });

  putContador$ = createEffect(() =>
    this.actions$.pipe(
      ofType<putContador>(ActionTypes.putContador),
      exhaustMap((action) => {
        console.log('efect put',action.payload.num)
        return this.apiService.put('contadors', {id: '6186d8108c2a703b51d64fb4', number: action.payload.num}).pipe(
          map(() => new getContador())
        );
      })
    ), { });
}

export const effects = [
  GeneralEffects,
];