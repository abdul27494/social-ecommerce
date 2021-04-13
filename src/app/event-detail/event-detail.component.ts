import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {

  constructor(private router: Router) { }
  btnClick= function () {
    this.router.navigateByUrl('/host');
};
  ngOnInit(): void {
  }
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    stagePadding: 50,
    dots: false,
    margin: 3,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 3
      },
      400: {
        items: 3
      },
      740: {
        items: 5
      },
      940: {
        items: 6
      }
    },
    nav: false
  }
}
