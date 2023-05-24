import { Component } from '@angular/core';

@Component({
  selector: 'lng-product-quick-view',
  templateUrl: './product-quick-view.component.html',
  styleUrls: ['./product-quick-view.component.scss']
})
export class ProductQuickViewComponent {
  productImages = [
    'https://blocks.primeng.org/assets/images/blocks/ecommerce/productoverview/product-overview-3-1.png',
    'https://blocks.primeng.org/assets/images/blocks/ecommerce/productoverview/product-overview-3-2.png',
    'https://blocks.primeng.org/assets/images/blocks/ecommerce/productoverview/product-overview-3-3.png',
    'https://blocks.primeng.org/assets/images/blocks/ecommerce/productoverview/product-overview-3-4.png'
  ];
  selectedImage = this.productImages[0]
}
