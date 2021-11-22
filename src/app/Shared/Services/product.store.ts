import { Product } from '../Models/product';
import { EntityStore, Store, StoreConfig } from '@datorama/akita';
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
  name: 'products'
})
export class ProductStore extends EntityStore<ProductState, Product> {
  constructor() {
    super(createInitialState());
  }
}
