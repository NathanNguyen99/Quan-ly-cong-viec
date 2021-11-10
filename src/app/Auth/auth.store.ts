import { Injectable } from '@angular/core';
import { User } from '../Shared/Models/user';
import { Store, StoreConfig } from '@datorama/akita';

export interface AuthState extends User {
  token: string;
}

export function createInitialAuthState(): AuthState {
  return { token: `${new Date().getTime()}` } as AuthState;
}

@StoreConfig({
  name: 'auth'
})
@Injectable({ providedIn: 'root' })
export class AuthStore extends Store<AuthState> {
  constructor() {
    super(createInitialAuthState());
  }
}
