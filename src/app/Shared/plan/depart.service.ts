import { Injectable } from '@angular/core';
import { Depart } from 'src/app/interface/depart';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Task } from '../Models/task.model';
import { PlanStore } from './plan.store';
import { arrayRemove, arrayUpsert, setLoading } from '@datorama/akita';
import { DateUtil } from 'src/app/utils/date';
import { Comment } from '../../interface/comment';
import { DepartStore } from './depart.store';
import { planInt } from 'src/app/interface/planInt';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'api/';
  constructor(private http: HttpClient, private _planStore: PlanStore, private _departStore: DepartStore) { }

  setLoading(isLoading: boolean) {
    this._departStore.setLoading(isLoading);
  }

  getDepart() {
    this.http
      .get<Depart>(this.productsUrl + "Test/")
      .pipe(
        setLoading(this._departStore),
        tap((project) => {
          this._departStore.update((state) => ({
            ...state,
            ...project,
          }));
          
        }),
        catchError((error) => {
          this._departStore.setError(error);
          return of(error);
        })
      )
      .subscribe();
  }

  updateDepart(project: Partial<Depart>) {
    this._departStore.update((state) => ({
      ...state,
      ...project
    }));
  }

  deleteDepart(issueId: string) {
    this._departStore.update((state) => {
      const departs = arrayRemove(state.tasks, issueId);
      return {
        ...state,
        plans,
      };
    });
  }

  updatePlan(task: planInt) {
    task.updatedAt = DateUtil.getNow();
    this._departStore.update((state) => {
      const plans = arrayUpsert(state.plans, task.id, task);
      return {
        ...state,
        plans,
      };
    });
  }

  // updatePlanComment(taskId: string, comment: Comment) {
  //   const allPlans = this._planStore.getValue().plans;
  //   const plan = allPlans.find((x) => x.id === taskId);
  //   if (!plan) {
  //     return;
  //   }

  //   const comments = arrayUpsert(plan.comments ?? [], comment.id, comment);
  //   this.updatePlan({
  //     ...plan,
  //     comments
  //   });
  // }


}