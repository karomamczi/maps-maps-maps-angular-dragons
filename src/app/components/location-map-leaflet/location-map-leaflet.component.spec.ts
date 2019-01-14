import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationMapLeafletComponent } from './location-map-leaflet.component';

describe('LocationMapLeafletComponent', () => {
  let component: LocationMapLeafletComponent;
  let fixture: ComponentFixture<LocationMapLeafletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationMapLeafletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationMapLeafletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
