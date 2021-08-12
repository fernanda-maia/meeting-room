import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  public navigateTo(path: string) {
    this.router.navigateByUrl(path);
  }

  public redirect(url: string) {
    window.open(url);
  }

}
