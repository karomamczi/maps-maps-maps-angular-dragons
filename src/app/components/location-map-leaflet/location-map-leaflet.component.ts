import { Component } from '@angular/core';
import { Country } from 'src/app/models/app.model';
import { MapOptions, tileLayer, latLng, Map } from 'leaflet';

@Component({
  selector: 'app-location-map-leaflet',
  templateUrl: './location-map-leaflet.component.html',
  styleUrls: ['./location-map-leaflet.component.scss']
})
export class LocationMapLeafletComponent {
  map: Map;
  options: MapOptions = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Open Street Map'
      })
    ],
    zoom: 16,
    center: latLng([50.064218, 19.948039])
  };

  handleCountrySelect(country: Country): void {}

  handleMapInstance(map: Map): void {
    this.map = map;
  }
}
