import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreditCardService } from '../../../services/credit-card/credit-card.service';

@Component({
  selector: 'app-credit-card-detail',
  templateUrl: './credit-card-detail.component.html',
  styleUrls: ['./credit-card-detail.component.css'],
})
export class CreditCardDetailComponent implements OnInit {
  public creditCardInfo: any;
  public page: number = 1;
  public pageSize: number = 5;
  transactions: [] = [];

  constructor(
    private route: ActivatedRoute,
    private creditCardService: CreditCardService
  ) {}

  ngOnInit(): void {
    const creditCardNumber = this.route.snapshot.params.id;
    this.getCreditCard(creditCardNumber);
  }

  public getCreditCard(creditCardNumber: string) {
    this.creditCardService.getCreditCard(creditCardNumber).subscribe(
      (res) => {
        // res.transactions.reverse();
        this.creditCardInfo = res;
        this.getTransactions(this.creditCardInfo.id);
      },
      (err) => {}
    );
  }

  public getTransactions(creditCardId: number) {
    this.creditCardService.getMovements(creditCardId).subscribe(
      (res) => {
        // res.transactions.reverse();
        this.transactions = res.reverse();
      },
      (err) => {}
    );
  }

  getExpiration(date) {
    const realDate = new Date(date);

    const year = realDate.getFullYear().toString().slice(-2);

    return `${realDate.getMonth() + 1}/${year}`;
  }
}
