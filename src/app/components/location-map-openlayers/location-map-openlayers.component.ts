import { Component, ViewChild } from '@angular/core';
import { Projection, Country } from '../../models/app.model';
import { MapComponent } from 'ngx-openlayers';
import { proj } from 'openlayers';

@Component({
  selector: 'app-location-map-openlayers',
  templateUrl: './location-map-openlayers.component.html',
  styleUrls: ['./location-map-openlayers.component.scss']
})
export class LocationMapOpenlayersComponent {
  @ViewChild('map') map: MapComponent;
  country: Country;
  projectionEnum = Projection;

  handleCountrySelect(country: Country): void {
    this.country = country;
    this.map.instance.getView().animate({
      center: proj.fromLonLat([this.country.latlng[1], this.country.latlng[0]]),
      zoom: 6
    });
  }

  closePopup(): void {
    this.country = undefined;
  }
}
