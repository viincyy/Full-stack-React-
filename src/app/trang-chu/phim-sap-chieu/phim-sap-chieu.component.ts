import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-phim-sap-chieu',
  templateUrl: './phim-sap-chieu.component.html',
  styleUrls: ['./phim-sap-chieu.component.css'],
})
export class PhimSapChieuComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 5,
        },
      },
    });
  }
}