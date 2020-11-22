import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalService } from '../services/local-storage/local.service';
import {catchError} from 'rxjs/internal/operators';
import { Router } from '@angular/router';

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(
    private localStorage: LocalService,
    private router: Router
    ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var userData = this.localStorage.getValue('userData');
    let customReq;
    if(userData){
      customReq = request.clone({
        headers: request.headers
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer '+ userData.accessToken)
      });
    }else {
      customReq = request.clone({
        headers: request.headers
                .set('Content-Type', 'application/json')
      })
    }
    return next.handle(customReq).pipe(
      catchError(err => {
          if(err.status == 401){
            this.localStorage.clearToken();
            this.router.navigate(['app/signIn']);
          }
          
          return throwError(err);
      })
    );
  }
}
