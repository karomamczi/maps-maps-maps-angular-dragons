import { Component } from '@angular/core';
import { Country } from 'src/app/models/app.model';
import {
  MapOptions,
  tileLayer,
  latLng,
  Map,
  LatLngExpression,
  Popup,
  popup
} from 'leaflet';

@Component({
  selector: 'app-location-map-leaflet',
  templateUrl: './location-map-leaflet.component.html',
  styleUrls: ['./location-map-leaflet.component.scss']
})
export class LocationMapLeafletComponent {
  map: Map;
  country: Country;
  layers: Popup[];
  options: MapOptions = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Open Street Map'
      })
    ],
    zoom: 16,
    center: latLng([50.064218, 19.948039])
  };

  handleCountrySelect(country: Country): void {
    this.country = country;
    this.map.flyTo(this.country.latlng as LatLngExpression, 6, {
      duration: 0.15,
      animate: true
    });
    this.layers = [this.getNewPopup()];
  }

  getNewPopup(): Popup {
    return popup()
      .setLatLng(this.country.latlng as LatLngExpression)
      .setContent(`Yay! We are in ${this.country.name} baby!`);
  }

  handleMapInstance(map: Map): void {
    this.map = map;
  }
}
