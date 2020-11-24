import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommerceService {

  constructor(private http: HttpClient) { }

  public getCommerces(): Observable<any>{
    return this.http.get(`${environment.apiUrl}shops`);
  }

  public postCommerce(name: string): Observable<any>{
    return this.http.post(`${environment.apiUrl}shops`, { name });
  }

  public getCommerceDetails(id: number): Observable<any>{
    return this.http.get(`${environment.apiUrl}shops/${id}`);
  }
}
