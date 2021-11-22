import { Plan } from 'src/app/interface/plan';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { planInt } from 'src/app/interface/planInt';

// export type PlanState = Plan;

// function createInitialState(): PlanState {
//   return {
//     plans: [],
//   } as PlanState;
// }

export interface PlanState extends EntityState<planInt> {}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({
  name: 'plan'
})
export class PlanStore extends EntityStore<PlanState> {
  constructor() {
    super();
  }
}
