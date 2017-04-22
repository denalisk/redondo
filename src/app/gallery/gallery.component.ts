import { Component, OnInit } from '@angular/core';

import { TileService } from '../tile.service';
import { ImageService } from '../image.service';
import { Tile } from '../tile.model';
import { Image } from '../image.model';
import { Category } from '../category.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [TileService, ImageService]
})
export class GalleryComponent implements OnInit {
  public categories: Category[];
  public limit: number = 0;
  public filterCategory: string;
  public tileSelected: boolean = false;
  public categorySelected: boolean = false;
  public currentTile: Tile;
  public currentCategory: Category;

  constructor(private tileService: TileService, private imageService: ImageService) { }

  ngOnInit() {
    this.tileService.getTiles().subscribe(data => {this.categories = data;});
  }

}
