export enum Projection {
  WorldGeodeticSystem84 = 'EPSG:4326',
  PseudeMercator = 'EPSG:3857'
}

export enum Route {
  SimpleMapOpenlayers = 'simple-map-openlayers',
  SimpleMapLeaflet = 'simple-map-leaflet',
  LocationMapOpenlayers = 'location-map-openlayers',
  LocationMapLeaflet = 'location-map-leaflet'
}

export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export interface Translations {
  de: string;
  es: string;
  fr: string;
  ja: string;
  it: string;
  br: string;
  pt: string;
}

export interface RegionalBloc {
  acronym: string;
  name: string;
  otherAcronyms: string[];
  otherNames: string[];
}

export interface Country {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  region: string;
  subregion: string;
  population: number;
  latlng: number[];
  demonym: string;
  area: number;
  gini: number;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: string;
  currencies: Currency[];
  languages: Language[];
  translations: Translations;
  flag: string;
  regionalBlocs: RegionalBloc[];
  cioc: string;
}
