import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalService } from '../services/local-storage/local.service';

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(private localStorage: LocalService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var userData = this.localStorage.getValue('userData');
    let customReq;
    customReq = request.clone({
      headers: request.headers
              .set('Content-Type', 'application/json')
              .set('Authorization', 'Bearer '+ userData.accessToken)
    });
    return next.handle(customReq);
  }
}
