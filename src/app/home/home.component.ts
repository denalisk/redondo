import { Component, OnInit } from '@angular/core';

import { Image } from '../image.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public images: Image[] = Image.carouselArray;

  constructor() { }

  ngOnInit() {
  }

}
