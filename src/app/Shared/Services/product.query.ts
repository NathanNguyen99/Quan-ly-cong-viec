import { ProductState, ProductStore } from './product.store';
import { Injectable } from '@angular/core';
import { Query, QueryEntity } from '@datorama/akita';
import { TaskStatus, Task } from '../Models/task.model';
import { map, delay } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductQuery extends Query<ProductState> {
  constructor(protected store: ProductStore) {
    super(store);
  }

  isLoading$ = this.selectLoading();
  all$ = this.select();
  tasks$ = this.select("tasks");
  users$ = this.select('users');

  
  lastIssuePosition = (status: TaskStatus): number => {
    const raw = this.store.getValue();
    const issuesByStatus = raw.tasks.filter(x => x.status === status);
    return issuesByStatus.length;
  };

  issueByStatusSorted$ = (status: TaskStatus): Observable<Task[]> => {
    return this.tasks$.pipe(
      map(issues => {
        let filteredIssues = issues
          .filter(x => x.status === status)
          .sort((a, b) => a.listPosition - b.listPosition)
        return filteredIssues
      })
    )
  }
  

//   issueById$(issueId: string){
//     return this.issues$.pipe(
//       delay(500),
//       map((issues) => issues.find(x => x.id === issueId))
//     );
//   }

}
