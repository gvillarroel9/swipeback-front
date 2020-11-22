import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor( private http: HttpClient) { }

 
  public getAccounts(): Observable<any> {
    return this.http.get(`${environment.apiUrl}accounts`);
  }

  public createAccount(): Observable<any> {
    return this.http.post(`${environment.apiUrl}accounts`,{});
  }

  public deposit(body): Observable<any> {
    return this.http.post(`${environment.apiUrl}accounts/deposit`, body);
  }

  public withdraw(body): Observable<any> {
    return this.http.post(`${environment.apiUrl}accounts/withdraw`, body);
  }

}
