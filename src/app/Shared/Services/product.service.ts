import { Injectable } from '@angular/core';
import { Product } from '../Models/product.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Task } from '../Models/task.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'api/';
  constructor(private http: HttpClient) { }

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

  editProduct(product: Product): Observable<any> {
    return this.http.put(this.productsUrl + product.id, product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(this.productsUrl + id);
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

  getTask(taskname: string): Observable<Task[]> {
    return this.http.get<Task[]>(this.productsUrl + taskname).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
}