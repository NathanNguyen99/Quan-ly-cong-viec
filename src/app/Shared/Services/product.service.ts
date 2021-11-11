import { Injectable } from '@angular/core';
import { Product } from '../Models/product.model';
import { Product as JProject} from '../Models/product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Task } from '../Models/task.model';
import { ProductStore } from './product.store';
import { arrayRemove, arrayUpsert, setLoading } from '@datorama/akita';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'api/';
  constructor(private http: HttpClient, private _store: ProductStore) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl + 'products/').pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  createProduct(product: Product): Observable<Product> {
    product.id = null;
    return this.http.post<Product>(this.productsUrl, product).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    )
  }

  //Create Task
  createTask(taskname: string,task: Task): Observable<Product> {
    task.id = null;
    return this.http.post<Product>(this.productsUrl + taskname, task).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    )
  }

  editProduct(product: Product): Observable<any> {
    return this.http.put(this.productsUrl + product.id, product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(this.productsUrl + id);
  }
  deleteTask(taskname: string, id: number): Observable<any> {
    return this.http.delete(this.productsUrl + taskname + "/" + id);
  }



  getSubProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl + 'subproducts/').pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  getTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.productsUrl + "Task/").pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  setLoading(isLoading: boolean) {
    this._store.setLoading(isLoading);
  }

  getProject() {
    this.http
      .get<JProject>(this.productsUrl + "Section/")
      .pipe(
        setLoading(this._store),
        tap((project) => {
          this._store.update((state) => ({
            ...state,
            ...project,
          }));
          console.log(project)
        }),
        catchError((error) => {
          this._store.setError(error);
          return of(error);
        })
      )
      .subscribe();
  }
}