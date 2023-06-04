import { inject } from "@angular/core";
import { Firestore, collection } from "@angular/fire/firestore";

export const firestore: Firestore = inject(Firestore);

export const newsCollection = collection(firestore, 'news');
export const productCollection = collection(firestore, 'products');
