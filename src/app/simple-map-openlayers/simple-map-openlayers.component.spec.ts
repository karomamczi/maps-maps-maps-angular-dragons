import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleMapOpenlayersComponent } from './simple-map-openlayers.component';

describe('SimpleMapOpenlayersComponent', () => {
  let component: SimpleMapOpenlayersComponent;
  let fixture: ComponentFixture<SimpleMapOpenlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleMapOpenlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleMapOpenlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
