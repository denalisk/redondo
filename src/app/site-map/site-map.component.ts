import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-site-map',
  templateUrl: './site-map.component.html',
  styleUrls: ['./site-map.component.css']
})
export class SiteMapComponent implements OnInit {
  public mainLinks = [
    {description: 'Home', path: ''},
    {description: 'Product Information', path: 'product-info'},
    {description: 'Installations Gallery', path: 'gallery'},
  ];

  public secondLinks = [
    {description: 'Tile Customizer', path: 'customizer'},

  ];

  public thirdLinks = [
    {description: 'About', path: 'about'},
    {description: 'Frequently Asked Questions', path: 'faqs'},
    {description: 'Contact Us', path: 'contact'},
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  linkTo(pathString: string) {
    this.router.navigate(['/' + pathString]);
  }

}
