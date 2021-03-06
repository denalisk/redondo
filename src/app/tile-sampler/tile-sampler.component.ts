import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularFire2';
import { Image } from '../image.model';
import { Tile } from '../tile.model';
import { TileService } from '../tile.service';

@Component({
  selector: 'app-tile-sampler',
  templateUrl: './tile-sampler.component.html',
  styleUrls: ['./tile-sampler.component.css'],
  providers: [TileService]
})
export class TileSamplerComponent implements OnInit {
  public tiles: Tile[];
  public limit: number = 6;
  public randomSetting: boolean = true;


  constructor(private tileService: TileService) { }

  ngOnInit() {
    this.tileService.getTiles().subscribe(data => {this.tiles = data;});
  }

}
