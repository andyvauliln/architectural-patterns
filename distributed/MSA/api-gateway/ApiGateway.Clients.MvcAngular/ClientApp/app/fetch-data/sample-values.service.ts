import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/Rx";

import { SampleValue } from './sample-values.models';

@Injectable()
export class SampleValuesService {
    private _url: string;

    constructor(
        private _router: Router,
        private _http: Http,
        @Inject('BASE_URL')baseUrl: string
    ) {
        this._url = baseUrl + 'api/samplevalues';
    }

    getList(): Observable<SampleValue[]> {
        return this._http.get(this._url)
            .map((response: any) => response.json() as SampleValue[]);
    }

    getItem(id: number): Observable<SampleValue> {
        return this._http.get(`${this._url}/${id}`)
            .map((response: any) => response.json() as SampleValue);
    }

    createItem(value: SampleValue): Observable<SampleValue> {
        return this._http.post(this._url, value)
            .map((response: any) => response.json() as SampleValue);
    }

    editItem(id: number, value: SampleValue): Observable<SampleValue> {
        return this._http.put(`${this._url}/${id}`, value)
            .map((response: any) => response.json() as SampleValue);
    }


    gotoList() {
        this._router.navigate(['fetch-data']);
    }

    gotoDetails(id: number) {
        this._router.navigate(['fetch-data', 'details', id]);
    }

    gotoCreate() {
        this._router.navigate(['fetch-data', 'create']);
    }

    gotoEdit(id: number) {
        this._router.navigate(['fetch-data', 'edit', id]);
    }
}
