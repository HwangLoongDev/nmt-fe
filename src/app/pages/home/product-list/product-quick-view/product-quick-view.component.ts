import { Component, Inject, OnInit } from '@angular/core';
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import {
  IProduct,
  IProductClassification,
  IQuickviewData,
} from './../../../../@core/models/product.model';

@Component({
  selector: 'lng-product-quick-view',
  templateUrl: './product-quick-view.component.html',
  styleUrls: ['./product-quick-view.component.scss'],
})
export class ProductQuickViewComponent implements OnInit {
  productImages: string[] | undefined = [];
  selectedImage: string | undefined = '';
  selectedProduct!: IProductClassification;
  dialogData!: IQuickviewData;
  group: IProduct[] = [];
  ref!: DynamicDialogRef;

  constructor(
    private dialogConfig: DynamicDialogConfig<IQuickviewData>,
    public dialogService: DialogService,
    private dialogRef: DynamicDialogRef
  ) {}

  ngOnInit(): void {
    this.dialogData = this.dialogConfig.data!;
    this.selectedProduct = this.dialogData.item.productClassification[0];
    this.productImages = this.dialogConfig.data?.item.productClassification.map(
      (prod: IProductClassification) => prod.images[0]
    );
    this.selectedImage = this.productImages?.[0] || '';
    this.group = this.dialogData.group.filter(
      (e) => e.id !== this.dialogData.item.id
    );
  }

  showQuickView(item: IProduct) {
    this.dialogRef.close();
    this.ref = this.dialogService.open(ProductQuickViewComponent, <
      DynamicDialogConfig<IQuickviewData>
    >{
      data: {
        item: item,
        group: this.dialogData.group,
      },
    });
  }
}
