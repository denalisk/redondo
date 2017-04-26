import { Component, OnInit } from '@angular/core';
import { Image } from '../image.model';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [ImageService]
})
export class AboutComponent implements OnInit {
  public images: Image[];

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.images = this.imageService.getImages();
  }

}
