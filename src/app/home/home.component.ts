import { Component, OnInit } from '@angular/core';

import { TileService } from '../tile.service';
import { ImageService } from '../image.service';
import { Tile } from '../tile.model';
import { Image } from '../image.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [TileService, ImageService]
})
export class HomeComponent implements OnInit {
  public images: Image[];

  constructor(private tileService: TileService, private imageService: ImageService) { }

  ngOnInit() {
    this.images = this.imageService.getImages();
  }

}
