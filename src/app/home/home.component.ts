import { Component, OnInit } from '@angular/core';

import { TileService } from '../tile.service';
import { Tile } from '../tile.model';
import { Image } from '../image.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [TileService]
})
export class HomeComponent implements OnInit {
  public tiles: Tile[];

  constructor(private tileService: TileService) { }

  ngOnInit() {
    this.tiles = this.tileService.getTiles();
  }

}
