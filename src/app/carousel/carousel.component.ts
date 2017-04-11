import { Component, OnInit } from '@angular/core';
import { Image } from '../image.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images: Image[] = Image.carouselArray;
  image: Image = this.images[0];

  constructor() { }

  ngOnInit() {
    console.log(this.images);
  }

}
