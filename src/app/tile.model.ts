import { Image } from './image.model';

export class Tile {
  public static idCounter: number = 1;
  public id: number;
  constructor(public name: string, public collectionId: string, public image: Image) {
    this.id = Tile.idCounter;
    Tile.idCounter++;
  }
}
