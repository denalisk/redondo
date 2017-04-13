import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../image.model';
import { Tile } from '../tile.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input() tiles: Tile[];

  constructor() { }

  ngOnInit() {
  }

}
