import { Injectable } from '@angular/core';
import { collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/@core/models/product.model';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends BaseService {
  getAllProduct(): Observable<IProduct[]> {
    return collectionData(this.productCollection, {
      idField: 'id',
    }) as Observable<IProduct[]>;
  }

  getBestSellerList() {
    return collectionData(this.bestSellerCollection, {
      idField: 'id',
    }) as Observable<any[]>;
  }
}
