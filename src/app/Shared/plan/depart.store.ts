import { Depart } from 'src/app/interface/depart';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

export type DepartState = Depart;

function createInitialState(): DepartState {
  return {
    tasks: [],
    users: [],
  } as DepartState;
}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({
  name: 'depart'
})
export class DepartStore extends EntityStore<DepartState> {
  constructor() {
    super(createInitialState());
  }
}
