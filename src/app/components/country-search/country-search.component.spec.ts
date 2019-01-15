import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrySearchComponent } from './country-search.component';

describe('CountrySearchComponent', () => {
  let component: CountrySearchComponent;
  let fixture: ComponentFixture<CountrySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountrySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
