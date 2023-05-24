import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProductQuickViewComponent } from './product-quick-view/product-quick-view.component';

@Component({
  selector: 'lng-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  listProduct = Array.from(Array(9).keys())
  ref!: DynamicDialogRef;

  constructor(public dialogService: DialogService) { }

  showQuickView() {
    this.ref = this.dialogService.open(ProductQuickViewComponent, { header: 'Select a Product' });
  }
}
