import { Component } from '@angular/core';
import { Projection } from '../../models/app.model';
import { Coordinate } from 'openlayers';

@Component({
  selector: 'app-location-map-openlayers',
  templateUrl: './location-map-openlayers.component.html',
  styleUrls: ['./location-map-openlayers.component.scss']
})
export class LocationMapOpenlayersComponent {
  countryCentroid: Coordinate;
  projectionEnum = Projection;
}
