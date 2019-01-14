import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MapComponent } from 'ngx-openlayers';
import {
  coordinate,
  MapEvent,
  MapBrowserEvent,
  Map,
  Coordinate,
  proj,
  Extent
} from 'openlayers';
import { Projection } from '../app.model';

@Component({
  selector: 'app-simple-map-openlayers',
  templateUrl: './simple-map-openlayers.component.html',
  styleUrls: ['./simple-map-openlayers.component.scss']
})
export class SimpleMapOpenlayersComponent implements AfterViewInit {
  @ViewChild('map') map: MapComponent;
  mapInstance: Map;
  lastPoint: Coordinate;
  lastExtent: Extent;
  coordinateFormat = coordinate.createStringXY(4);
  projectionEnum = Projection;

  ngAfterViewInit(): void {
    this.mapInstance = this.map.instance;
  }

  handleSingleClick(event: MapBrowserEvent): void {
    this.lastPoint = this.getTransformedCoordinate(event.coordinate);
  }

  handleMoveEnd(event: MapEvent): void {
    this.lastExtent = this.getTransformedExtent(
      event.map.getView().calculateExtent(event.map.getSize())
    );
  }

  getTransformedCoordinate(coordinateToTransform: Coordinate): Coordinate {
    return proj.transform(
      coordinateToTransform,
      Projection.PseudeMercator,
      Projection.WorldGeodeticSystem84
    );
  }

  getTransformedExtent(extentToTransform: Extent): Extent {
    return proj.transformExtent(
      extentToTransform,
      Projection.PseudeMercator,
      Projection.WorldGeodeticSystem84
    );
  }
}
