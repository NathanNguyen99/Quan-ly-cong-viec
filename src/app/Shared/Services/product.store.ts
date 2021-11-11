import { Product } from '../Models/product';
import { Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

export type ProductState = Product;

function createInitialState(): ProductState {
  return {
    tasks: [],
    users: []
  } as ProductState;
}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({
  name: 'product'
})
export class ProductStore extends Store<ProductState> {
  constructor() {
    super(createInitialState());
  }
}
