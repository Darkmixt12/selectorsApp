import { Injectable } from '@angular/core';
import { Country, Region, SmallCountry } from '../interfaces/country.interface';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({providedIn: 'root'})
export class CountryService {   

    private baseUrl: string = 'https://restcountries.com/v3.1'; 

    private _region: Region[] = [Region.Africa, Region.Americas, Region.Asia, Region.Europa, Region.Oceania]


    constructor(
        private http: HttpClient
    ) { }
    
    get regions(): Region[]{
        return [...this._region];
    }

    getCountriesRegion(region: Region): Observable <SmallCountry[]> {
        
        if(!region) return of ([]);

        const url: string = `${this.baseUrl}/region/${ region }?fields=cca3,name,borders`;


        return this.http.get<SmallCountry[]>(url);
    }
}