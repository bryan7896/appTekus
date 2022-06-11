import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, switchMap, tap, take, filter } from 'rxjs/operators';
import {
    HttpClient,
    HttpHeaders,
} from '@angular/common/http';
import * as _ from 'lodash';


export interface putConfig {
    useAuthHeaders?: boolean;
    setUpdateTime?: boolean;
    setDeleteTime?: boolean;
    token?: string;
}

export interface getConfig {
    count?: boolean;
}

import { Store } from '@ngrx/store';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    private ENV = environment.apiUrl;

    constructor(public http: HttpClient, public store$: Store) { }

    public get(url: string, filter: any, config?: getConfig): Observable<any> {
        config = { ...config };
        const fullUrl = config.count ? url + '/' + 'count' + '?where=' + JSON.stringify(filter) : url + '?filter=' + JSON.stringify(filter);
        return this.http.get(`${this.ENV}${fullUrl}`);
    }
}
