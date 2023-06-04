import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/@shared/services/product.service';

@Component({
  selector: 'lng-best-seller-list',
  templateUrl: './best-seller-list.component.html',
  styleUrls: ['./best-seller-list.component.scss'],
})
export class BestSellerListComponent implements OnInit {
  listBestSeller = [];
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

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getBestSellerList().subscribe({
      next: (res: any) => {
        this.listBestSeller = res[0].list;
      },
      error: () => {},
    });
  }
}
