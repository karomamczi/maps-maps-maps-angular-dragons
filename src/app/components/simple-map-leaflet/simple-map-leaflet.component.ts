import { Component, OnInit } from '@angular/core';
import {
  MapOptions,
  latLng,
  tileLayer,
  LeafletMouseEvent,
  Map,
  Layer,
  Marker,
  marker,
  icon,
  LatLngExpression
} from 'leaflet';
import {
  LeafletLayers,
  LeafletControlLayersConfig,
  BaseLayer
} from 'src/app/models/app.model';

@Component({
  selector: 'app-simple-map-leaflet',
  templateUrl: './simple-map-leaflet.component.html',
  styleUrls: ['./simple-map-leaflet.component.scss']
})
export class SimpleMapLeafletComponent implements OnInit {
  lastPoint: LatLngExpression;
  lastExtent: number[];
  initialLayers: Layer[];
  layers: Layer[] | Marker[];
  map: Map;
  openCycleMapOptions = new BaseLayer(
    'opencyclemap',
    'Open Cycle Map',
    true,
    tileLayer('http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: 'Open Cycle Map'
    })
  );
  openStreetMapOptions = new BaseLayer(
    'openstreetmap',
    'Open Street Map',
    false,
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: 'Open Street Map'
    })
  );
  layersControl: LeafletControlLayersConfig = {
    baseLayers: {
      'Open Street Map': this.openStreetMapOptions.layer,
      'Open Cycle Map': this.openCycleMapOptions.layer
    },
    overlays: {}
  };
  options: MapOptions = {
    zoom: 16,
    center: latLng([50.064218, 19.948039])
  };
  leafletLayers = new LeafletLayers(
    [this.openStreetMapOptions, this.openCycleMapOptions],
    this.openStreetMapOptions.id,
    []
  );

  ngOnInit(): void {
    this.initLayers();
  }

  initLayers(): void {
    const baseLayer = this.leafletLayers.baseLayers.find(
      layer => layer.id === this.leafletLayers.baseLayerId
    );
    const newLayers = this.leafletLayers.overlayLayers
      .filter(layer => layer.enabled)
      .map(layer => layer.layer);
    newLayers.unshift(baseLayer.layer);

    this.initialLayers = newLayers;
    this.layers = this.initialLayers;
  }

  handleClick(event: LeafletMouseEvent): void {
    this.lastPoint = [event.latlng.lat, event.latlng.lng];
    this.layers = [...this.initialLayers, this.getNewMarker()];
  }

  getNewMarker(): Marker {
    return marker(this.lastPoint, {
      icon: icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: 'leaflet/marker-icon.png',
        shadowUrl: 'leaflet/marker-shadow.png'
      })
    });
  }

  handleMoveEnd(): void {
    this.calculateCurrentBounds();
  }

  handleMapInstance(map: Map): void {
    this.map = map;
    this.calculateCurrentBounds();
  }

  calculateCurrentBounds(): void {
    const bounds = this.map.getBounds();
    this.lastExtent = [
      bounds.getSouthWest().lat,
      bounds.getSouthWest().lng,
      bounds.getNorthEast().lat,
      bounds.getNorthEast().lng
    ];
  }
}
