import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-location-info',
  templateUrl: './location-info.component.html',
  styleUrls: ['./location-info.component.scss']
})
export class LocationInfoComponent {
  @Input() lastPoint: number[];
  @Input() lastExtent: number[];
}
