import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Shared/Models/user';
import { of } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { AuthStore } from './auth.store';
import { environment } from 'src/environments/environment';
import { LoginPayload } from './loginPayload';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private productsUrl = 'api/';
  constructor(private _http: HttpClient, private _store: AuthStore) {
  }

  login({ email = '', password = '' }: LoginPayload) {
    this._store.setLoading(true);
    this._http
      .get<User>(`${this.productsUrl}Auth/`)
      .pipe(
        map((user) => {
          this._store.update((state) => ({
            ...state,
            ...user
          }));
        }),
        finalize(() => {
          this._store.setLoading(false);
        }),
        catchError((err) => {
          this._store.setError(err);
          return of(err);
        })
      )
      .subscribe();
  }
}


