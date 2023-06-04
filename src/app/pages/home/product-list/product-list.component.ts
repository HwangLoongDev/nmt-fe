import { Component, OnInit } from '@angular/core';
import {
  DialogService,
  DynamicDialogRef,
  DynamicDialogConfig,
} from 'primeng/dynamicdialog';
import { ProductQuickViewComponent } from './product-quick-view/product-quick-view.component';
import { ProductService } from 'src/app/@shared/services/product.service';
import { IProduct, IQuickviewData } from 'src/app/@core/models/product.model';

@Component({
  selector: 'lng-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  listProductFilterByGroup: IProduct[] = [];
  allProduct: IProduct[] = [];
  ref!: DynamicDialogRef;
  constructor(
    public dialogService: DialogService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe({
      next: (res) => {
        this.allProduct = res;
        this.listProductFilterByGroup = [
          ...new Map(
            res.filter(Boolean).map((item) => [item['group'], item])
          ).values(),
        ];
      },
    });
  }

  showQuickView(item: IProduct) {
    this.ref = this.dialogService.open(ProductQuickViewComponent, <
      DynamicDialogConfig<IQuickviewData>
    >{
      data: {
        item: item,
        group: this.allProduct.filter((e) => e.group === item.group),
      },
    });
  }

  minPrice(item: IProduct) {
    if (!item) {
      return 0;
    }
    const group = this.allProduct.filter((e) => e.group === item.group);
    const mapClassification = group.flatMap((e) => e.productClassification);
    const sortedPrice = mapClassification.sort((a, b) => a.price - b.price);

    return sortedPrice[0].price;
  }
}
