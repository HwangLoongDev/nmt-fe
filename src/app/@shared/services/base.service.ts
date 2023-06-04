import { inject } from '@angular/core';
import { Firestore, collection } from '@angular/fire/firestore';

export class BaseService {
  firestore: Firestore = inject(Firestore);

  public newsCollection = collection(this.firestore, 'news');
  public productCollection = collection(this.firestore, 'products');
  public bestSellerCollection = collection(this.firestore, 'best-seller');
}
