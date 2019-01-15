import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularOpenlayersModule } from 'ngx-openlayers';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleMapOpenlayersComponent } from './components/simple-map-openlayers/simple-map-openlayers.component';
import { SimpleMapLeafletComponent } from './components/simple-map-leaflet/simple-map-leaflet.component';
import { LocationMapLeafletComponent } from './components/location-map-leaflet/location-map-leaflet.component';
import { LocationMapOpenlayersComponent } from './components/location-map-openlayers/location-map-openlayers.component';
import { CountriesService } from './services/countries/countries.service';
import { CountrySearchComponent } from './components/country-search/country-search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LocationInfoComponent } from './components/location-info/location-info.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleMapOpenlayersComponent,
    SimpleMapLeafletComponent,
    LocationMapLeafletComponent,
    LocationMapOpenlayersComponent,
    CountrySearchComponent,
    LocationInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularOpenlayersModule,
    LeafletModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [CountriesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
