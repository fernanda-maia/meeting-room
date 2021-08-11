import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [
    './navbar.component.css'
  ]
})
export class NavbarComponent implements OnInit {

  @ViewChild('sidenav', {static: false})
  sidenav: MatSidenav;

  constructor() { }

  ngOnInit(): void {

  }

  openSidenav(): void {
    this.sidenav.open();

  }

  closeSidenav(): void {
    this.sidenav.close();

  }

}
