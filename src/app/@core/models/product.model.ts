export interface IProduct {
  productName: string;
  category: string;
  group: string;
  productClassification: IProductClassification[];
  description: string;
  createdDate: string;
  modifiedDate: string;
  id: string;
}

export interface IProductClassification {
  images: string[];
  color: string[];
  price: number;
}

export interface IQuickviewData {
  item: IProduct;
  group: IProduct[];
}
