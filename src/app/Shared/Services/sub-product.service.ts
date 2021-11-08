import { Injectable } from '@angular/core';
import { subProduct } from '../Models/subProduct.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Auth } from 'src/app/Auth/auth';
@Injectable({
  providedIn: 'root'
})
export class SubProductService {
  private productsUrl = 'api/subproducts/';
  constructor(private http: HttpClient, auth: Auth ) { }
  getProducts(): Observable<subProduct[]> {
    return this.http.get<subProduct[]>(this.productsUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  createProduct(product: subProduct): Observable<subProduct> {
    product.id = null;
    return this.http.post<subProduct>(this.productsUrl, product).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    )
  }

  editProduct(product: subProduct): Observable<any> {
    return this.http.put(this.productsUrl + product.id, product);
  }

  deleteProduct(id: number | string): Observable<any> {
    return this.http.delete(this.productsUrl + id);
  }
}