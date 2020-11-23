import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  constructor(private http: HttpClient) { }

  public getCreditCards(): Observable<any>{
    return this.http.get(`${environment.apiUrl}credit-cards`);
  }

  public postCreditCard(): Observable<any>{
    return this.http.post(`${environment.apiUrl}credit-cards`, {});
  }

  public getMovements(creditCardNumber: string): Observable<any>{
    return this.http.get(`${environment.apiUrl}credit-cards/${creditCardNumber}/movements`);
  }

  public payment(payment: any): Observable<any>{
    return this.http.post(`${environment.apiUrl}credit-cards/balance-payment`, payment);
  }
}
