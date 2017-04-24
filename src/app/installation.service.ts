import { Injectable } from '@angular/core';
import { TILES, IMAGES } from './mock-data';
import { Tile } from './tile.model';
import { Image } from './image.model';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class InstallationService {
  public installations: FirebaseListObservable<any[]>;


  constructor(private angularFire: AngularFire) {
    this.installations = angularFire.database.list('installations');
  }

  public getInstallations() {
    return this.installations;
  }

}
