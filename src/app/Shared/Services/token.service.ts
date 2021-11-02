import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from './../../Config/config';
import { baseService } from '../Services/base.service';
import { Auth } from '../../Auth/auth';

@Injectable()
export class TokenService extends baseService {
  private pathAPI = this.config.setting['PathAPI'];
  public errorMessage: string | undefined;
  constructor(private http: HttpClient, private config: AppConfig, auth: Auth) { super(auth); }
  authorization(data: any): any {
    let body = JSON.stringify(data);
    //console.log(body);
    return this.getToken(body);    
  }
  private getToken (body: any): Observable<any> {
    return this.http.post<any>(this.pathAPI + 'token', body, super.header());
    // .pipe(
    //     catchError(super.handleError)
    //   );
  }
}