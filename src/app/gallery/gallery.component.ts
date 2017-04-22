import { Component, OnInit } from '@angular/core';

import { TileService } from '../tile.service';
import { ImageService } from '../image.service';
import { Tile } from '../tile.model';
import { Image } from '../image.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [TileService, ImageService]
})
export class GalleryComponent implements OnInit {
  public tiles: Tile[];
  public categories: string[];
  public limit: number = 0;

  constructor(private tileService: TileService, private imageService: ImageService) { }

  ngOnInit() {
    this.tileService.getTiles().subscribe(data => {this.tiles = data;});
    console.log(this.tiles);
    this.categories = this.tileService.getTileCategories();
  }

}
