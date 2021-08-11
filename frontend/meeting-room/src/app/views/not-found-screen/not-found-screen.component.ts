import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-not-found-screen',
  templateUrl: './not-found-screen.component.html',
  styleUrls: ['./not-found-screen.component.css']
})
export class NotFoundScreenComponent implements OnInit {

  constructor(private router: Router) { 

  }

  ngOnInit(): void {

  }

  public backToHome(): void {
    this.router.navigateByUrl('/');
  }

}
