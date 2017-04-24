import { Component, OnInit } from '@angular/core';

import { InstallationService } from '../installation.service';
import { Installation } from '../installation.model';
import { Image } from '../image.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [InstallationService]
})
export class GalleryComponent implements OnInit {
  public installations: Installation[];
  public limit: number = 5;
  public filterCategory: string;
  public tileSelected: boolean = false;
  public categorySelected: boolean = false;
  public currentInstallation: Installation;

  // For image selection
  public focusImage: Image;
  public imageIsInFocus: boolean = false;

  constructor(private installationService: InstallationService) { }

  ngOnInit() {
    this.installationService.getInstallations().subscribe(data => {this.installations = data;});
  }

  public exitImageFocus() {
    this.focusImage = null;
    this.imageIsInFocus = false;
  }

  public imageClicked (selectedImage: Image) {
    this.focusImage = selectedImage;
    this.imageIsInFocus = true;
  }

  public incrementLimit() {
    this.limit += 5;
  }

}
