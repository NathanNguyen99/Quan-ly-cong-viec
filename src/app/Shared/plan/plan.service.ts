import { Injectable } from '@angular/core';
import { Plan } from 'src/app/interface/plan';
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
    this._planStore.setLoading(isLoading);
  }

  getProject() {
    this.http
      .get<Plan>(this.productsUrl + "Test/")
      .pipe(
        setLoading(this._planStore),
        tap((project) => {
          this._planStore.update((state) => ({
            ...state,
            ...project,
          }));
          
        }),
        catchError((error) => {
          this._planStore.setError(error);
          return of(error);
        })
      )
      .subscribe();
  }

  updateProject(project: Partial<Plan>) {
    this._planStore.update((state) => ({
      ...state,
      ...project
    }));
  }

  deletePlan(issueId: string) {
    this._planStore.update((state) => {
      const plans = arrayRemove(state.plans, issueId);
      return {
        ...state,
        plans,
      };
    });
  }

  updatePlan(task: planInt) {
    task.updatedAt = DateUtil.getNow();
    this._planStore.update((state) => {
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