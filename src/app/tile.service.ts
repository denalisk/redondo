import { Injectable } from '@angular/core';
import { TILES, IMAGES } from './mock-data';
import { Tile } from './tile.model';
import { Image } from './image.model';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class TileService {
  public images: Image[] = IMAGES;
  public tiles: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.tiles = angularFire.database.list('tiles');
  }

  getTiles(): FirebaseListObservable<any[]> {
    return this.tiles;
  }

  getTileById(tileId: string): FirebaseObjectObservable<any> {
    return this.angularFire.database.object('tiles/' + tileId);
  }

  getTilesByCategory(category: string): Tile[] {
    // THIS ONE NEEDS WORK NOW. Maybe just do this with a pipe
    let output: Tile[] = [];
    return output;
  }

}
