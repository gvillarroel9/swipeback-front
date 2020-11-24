import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CreditCardService {
  constructor(private http: HttpClient) {}

  public getCreditCards(): Observable<any> {
    return this.http.get(`${environment.apiUrl}credit-cards`);
  }

  public postCreditCard(): Observable<any> {
    return this.http.post(`${environment.apiUrl}credit-cards`, {});
  }

  public getCreditCard(creditCardNumber: string): Observable<any> {
    return this.http.get(
      `${environment.apiUrl}credit-cards/${creditCardNumber}/movements`
    );
  }

  public getMovements(creditCardId: number): Observable<any> {
    return this.http.get(
      `${environment.apiUrl}transactions/creditCard/${creditCardId}`
    );
  }

  public payment(body: any): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}credit-cards/balance-payment`,
      body
    );
  }
}
