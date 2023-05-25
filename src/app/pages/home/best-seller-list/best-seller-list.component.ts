import { Component } from '@angular/core';

@Component({
  selector: 'lng-best-seller-list',
  templateUrl: './best-seller-list.component.html',
  styleUrls: ['./best-seller-list.component.scss'],
})
export class BestSellerListComponent {
  listBestSeller = Array.from(Array(6).keys());
  responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '991px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '767px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '475px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
}
