import { Injectable } from '@angular/core';
import { TILES, IMAGES } from './mock-data';
import { Tile } from './tile.model';
import { Image } from './image.model';

@Injectable()
export class TileService {
  public images: Image[] = IMAGES;
  public tiles: Tile[] =  TILES;

  constructor() { }

  getTiles(): Tile[] {
    return this.tiles;
  }

  getTileById(tileId: number): Tile {
    for (let tile of this.tiles) {
      if (tile.id === tileId) {
        return tile;
      }
    }
  }

  getTilesByCategory(category: string): Tile[] {
    let output: Tile[] = [];
    for (let tile of this.tiles) {
      if (tile.collectionId === category) {
        output.push(tile);
      }
    }
    return output;
  }

}
