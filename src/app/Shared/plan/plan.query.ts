import { PlanState, PlanStore } from './plan.store';
import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { map, delay } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PlanQuery extends QueryEntity<PlanState> {
  isLoading$ = this.selectLoading();
  all$ = this.select();

  plans$ = this.select('plans');

  constructor(protected store: PlanStore) {
    super(store);
  }

  //   lastIssuePosition = (status: IssueStatus): number => {
  //     const raw = this.store.getValue();
  //     const issuesByStatus = raw.issues.filter(x => x.status === status);
  //     return issuesByStatus.length;
  //   };

  //   issueByStatusSorted$ = (status: IssueStatus): Observable<JIssue[]> => this.issues$.pipe(
  //       map((issues) => issues
  //           .filter((x) => x.status === status)
  //           .sort((a, b) => a.listPosition - b.listPosition))
  //     );

  planById$(planId: string) {
    return this.plans$.pipe(
      delay(500),
      map((plans) => plans.find((x) => x.id === planId))
    );
  }
}
