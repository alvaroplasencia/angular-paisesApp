import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiURL: string = "https://restcountries.com/v3.1"

  get httpParams(){
    return new HttpParams().set("fields", "name,capital,population,flags,ccn3,cca3,cca2")
  }


  //private filter: string = "fields = "

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {
    const url: string = `${this.apiURL}/name/${termino}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  porCapital(termino: string): Observable<Country[]> {
    const url: string = `${this.apiURL}/capital/${termino}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  porRegion(termino: string): Observable<Country[]> {

    const url: string = `${this.apiURL}/region/${termino}?fields=name,capital,population,flags`;
    return this.http.get<Country[]>(url, { params: this.httpParams }).pipe(tap(console.log));
  }

  getPaisPorAlpha(id: string): Observable<Country[]> {
    const url: string = `${this.apiURL}/alpha/${id}`;
    return this.http.get<Country[]>(url);
  }
}
