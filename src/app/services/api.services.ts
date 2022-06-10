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
    useAuthHeaders?: boolean;
    token?: string;
    count?: boolean;
}

export interface deleteConfig {
    useAuthHeaders?: boolean;
    token?: string;
}
import { Store } from '@ngrx/store';

const defaultGetConfig: getConfig = { useAuthHeaders: true };

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    private ENV = environment.apiUrl;

    constructor(public http: HttpClient, public store$: Store) { }

    public put(url: string, dataInfo: any, config?: putConfig): Observable<any> {
        let data = _.cloneDeep(dataInfo)
        return this.http.put(`${this.ENV}${url}/${data.id}`, data);
    }

    public patch(url: string, dataInfo: any, config?: putConfig): Observable<any> {
        let data = _.cloneDeep(dataInfo)
        return this.http.patch(`${this.ENV}${url}/${data.id}`, data);
    }

    public get(url: string, filter: any, config?: getConfig): Observable<any> {
        config = { ...defaultGetConfig, ...config };
        const fullUrl = config.count ? url + '/' + 'count' + '?where=' + JSON.stringify(filter) : url + '?filter=' + JSON.stringify(filter);
        return this.http.get(`${this.ENV}${fullUrl}`);
    }

    public getById(url: string, id: string, config?: getConfig): Observable<any> {
        return this.http.get(`${this.ENV}/${url}/${id}`);
    }

    public delete(url: string, id: any, config?: deleteConfig): Observable<any> {
        return this.http.delete(`${this.ENV}/${url}/${id}`);
    }
}
