import { Injectable } from '@angular/core';
import { Country } from 'src/app/models/app.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class CountriesService {
  constructor(private http: HttpClient) {}

  getCountries(term: string): Observable<Country[]> {
    if (term === '') {
      return of([] as Country[]);
    }
    return this.http
      .get(`https://restcountries.eu/rest/v2/name/${term}`)
      .pipe(map(response => response as Country[]));
  }
}
