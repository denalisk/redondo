import { Injectable } from '@angular/core';
import { TILES, IMAGES } from './mock-data';
import { Tile } from './tile.model';
import { Image } from './image.model';

@Injectable()
export class ImageService {
  public images: Image[] = IMAGES;
  public tiles: Tile[] =  TILES;

  constructor() { }

}
