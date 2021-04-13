import { Component, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { CommentsComponent } from './comments/comments.component';
import { ProductLineupComponent } from './product-lineup/product-lineup.component';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss']
})
export class HostComponent implements OnInit {

  constructor(private bottomSheet: MatBottomSheet,) { }

  ngOnInit(): void {

  }
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    stagePadding: 30,
    dots: false,
    margin: 13,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }

  openCommentSheet() {
    this.bottomSheet.open(CommentsComponent);

  }

  openProductSheet() {
    this.bottomSheet.open(ProductLineupComponent);

  }

}
