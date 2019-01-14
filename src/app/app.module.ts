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

@NgModule({
  declarations: [
    AppComponent,
    SimpleMapOpenlayersComponent,
    SimpleMapLeafletComponent,
    LocationMapLeafletComponent,
    LocationMapOpenlayersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularOpenlayersModule,
    LeafletModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
