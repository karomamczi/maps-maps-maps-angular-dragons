import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleMapLeafletComponent } from './simple-map-leaflet.component';

describe('SimpleMapLeafletComponent', () => {
  let component: SimpleMapLeafletComponent;
  let fixture: ComponentFixture<SimpleMapLeafletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleMapLeafletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleMapLeafletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
