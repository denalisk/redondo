import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Image } from '../image.model';

@Component({
  selector: 'app-image-focus',
  templateUrl: './image-focus.component.html',
  styleUrls: ['./image-focus.component.css']
})
export class ImageFocusComponent {
  @Input() currentImage: Image;
  @Output() clickSender = new EventEmitter;

  constructor() { }

  public clickUnfocusImage() {
    this.clickSender.emit();
  }

}
