import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})

export class HeaderBarComponent implements OnInit {

  public menuButton!: boolean;

  constructor() { }

  ngOnInit(): void {
    this.menuButton = false;
  }

  toggleMenu() {
    console.log("Toggle toggle");
    this.menuButton = !this.menuButton;
  }
}
