import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Auth } from '../../Auth/auth';
import { Observable } from 'rxjs';
@Injectable()
export class baseService {
  constructor(private auth: Auth) {}
  public extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
  public handleError(error: Response | any) {
    // In a real-world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    //return Observable.throw(errMsg);
  }

  public header() {
    let oheader = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (this.auth.isAuthenticated()) {
      oheader = oheader.append(
        'Authorization',
        'Bearer ' + this.auth.getToken()
      );
    }
    return { headers: oheader };
  }

  public header2() {

    let oheader = new HttpHeaders({ 'Content-Type': 'application/json' });

    if (this.auth.isAuthenticated()) {
      oheader = oheader.append(
        'Authorization',
        'Bearer ' + this.auth.getToken()
      );
    }
    return { headers: oheader, responseType: 'json', observe: 'response' };
  }

  public header3() {
    let oheader = new HttpHeaders();
    if (this.auth.isAuthenticated()) {
      oheader = oheader.append(
        'Authorization',
        'Bearer ' + this.auth.getToken()
      );
    }
    return { headers: oheader };
  }

  public setToken(data: any) {
    this.auth.setToken(data);
  }

  public failToken(error: Response | any) {
    this.auth.failToken();
    return this.handleError(Response);
  }
}
