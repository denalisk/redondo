import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageFocusComponent } from './image-focus.component';

describe('ImageFocusComponent', () => {
  let component: ImageFocusComponent;
  let fixture: ComponentFixture<ImageFocusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageFocusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
