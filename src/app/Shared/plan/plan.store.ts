import { Plan } from 'src/app/interface/plan';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

export type PlanState = Plan;

function createInitialState(): PlanState {
  return {
    plans: [],
  } as PlanState;
}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({
  name: 'plan'
})
export class PlanStore extends EntityStore<PlanState> {
  constructor() {
    super(createInitialState());
  }
}
