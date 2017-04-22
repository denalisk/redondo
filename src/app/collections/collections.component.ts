import { Component, OnInit } from '@angular/core';

import { TileService } from '../tile.service';
import { ImageService } from '../image.service';
import { Tile } from '../tile.model';
import { Image } from '../image.model';
import { Category } from '../category.model';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css'],
  providers: [TileService, ImageService]
})
export class CollectionsComponent implements OnInit {
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

  public setFilterCategory(selectedCategory: string) {
    this.filterCategory = selectedCategory;
    if (selectedCategory != "All") {
      this.categorySelected = true;
      for (let category of this.categories) {
        if (category.name === selectedCategory) {
          this.currentCategory = category;
          break;
        }
      }
    } else {
      this.currentCategory = null;
      this.categorySelected = false;
    }

  }

  public tileClick(selectedTile: Tile) {
    this.currentTile = selectedTile;
    this.tileSelected = true;
  }

  public clearSelection() {
    this.currentTile = null;
    this.tileSelected = false;
  }
}
