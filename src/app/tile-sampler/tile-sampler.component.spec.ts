import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TileSamplerComponent } from './tile-sampler.component';

describe('TileSamplerComponent', () => {
  let component: TileSamplerComponent;
  let fixture: ComponentFixture<TileSamplerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TileSamplerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TileSamplerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
