import { Component } from '@angular/core';

@Component({
  selector: 'lng-best-seller-list',
  templateUrl: './best-seller-list.component.html',
  styleUrls: ['./best-seller-list.component.scss']
})
export class BestSellerListComponent {
  listBestSeller = Array.from(Array(6).keys())
}
