import { Component, Output, EventEmitter } from '@angular/core';
import { CountriesService } from 'src/app/services/countries/countries.service';
import { Observable, of } from 'rxjs';
import {
  catchError,
  tap,
  debounceTime,
  distinctUntilChanged,
  switchMap
} from 'rxjs/operators';
import { Country } from 'src/app/models/app.model';
import { NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-country-search',
  templateUrl: './country-search.component.html',
  styleUrls: ['./country-search.component.scss']
})
export class CountrySearchComponent {
  @Output() country = new EventEmitter<Country>();
  model: Country | string;
  searching = false;
  searchFailed = false;

  constructor(private countriesService: CountriesService) {}

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => (this.searching = true)),
      switchMap(term =>
        this.countriesService.getCountries(term).pipe(
          tap(() => (this.searchFailed = false)),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          })
        )
      ),
      tap(() => (this.searching = false))
    );

  formatter = (x: { name: string }) => x.name;

  selectedItem(event: NgbTypeaheadSelectItemEvent): void {
    this.country.emit(event.item);
  }
}
