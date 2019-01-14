import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationMapOpenlayersComponent } from './location-map-openlayers.component';

describe('LocationMapOpenlayersComponent', () => {
  let component: LocationMapOpenlayersComponent;
  let fixture: ComponentFixture<LocationMapOpenlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationMapOpenlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationMapOpenlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
