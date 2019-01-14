import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleMapOpenlayersComponent } from './simple-map-openlayers/simple-map-openlayers.component';
import { SimpleMapLeafletComponent } from './simple-map-leaflet/simple-map-leaflet.component';
import { LocationMapOpenlayersComponent } from './location-map-openlayers/location-map-openlayers.component';
import { LocationMapLeafletComponent } from './location-map-leaflet/location-map-leaflet.component';

export const routes: Routes = [
  { path: 'simple-map-openlayers', component: SimpleMapOpenlayersComponent },
  { path: 'simple-map-leaflet', component: SimpleMapLeafletComponent },
  {
    path: 'location-map-openlayers',
    component: LocationMapOpenlayersComponent
  },
  { path: 'location-map-leaflet', component: LocationMapLeafletComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
