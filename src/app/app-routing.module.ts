import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleMapOpenlayersComponent } from './components/simple-map-openlayers/simple-map-openlayers.component';
import { SimpleMapLeafletComponent } from './components/simple-map-leaflet/simple-map-leaflet.component';
import { LocationMapOpenlayersComponent } from './components/location-map-openlayers/location-map-openlayers.component';
import { LocationMapLeafletComponent } from './components/location-map-leaflet/location-map-leaflet.component';

export const routes: Routes = [
  { path: 'simple-map-openlayers', component: SimpleMapOpenlayersComponent },
  { path: 'simple-map-leaflet', component: SimpleMapLeafletComponent },
  {
    path: 'location-map-openlayers',
    component: LocationMapOpenlayersComponent
  },
  { path: 'location-map-leaflet', component: LocationMapLeafletComponent },
  { path: '', redirectTo: 'simple-map-openlayers', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
