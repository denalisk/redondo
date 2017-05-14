import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public mobileState: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public toggleState() {
    this.mobileState = (!(this.mobileState));
  }

}
