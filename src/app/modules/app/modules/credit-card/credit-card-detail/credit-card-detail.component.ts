import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreditCardService } from '../../../services/credit-card/credit-card.service';

@Component({
  selector: 'app-credit-card-detail',
  templateUrl: './credit-card-detail.component.html',
  styleUrls: ['./credit-card-detail.component.css']
})
export class CreditCardDetailComponent implements OnInit {

  public creditCardInfo: any;

  constructor(private route: ActivatedRoute, private creditCardService: CreditCardService) { }

  ngOnInit(): void {
    const creditCardNumber = this.route.snapshot.params.id;
    this.getCreditCardMovements(creditCardNumber);
  }

  public getCreditCardMovements(creditCardNumber: string){
    this.creditCardService.getMovements(creditCardNumber).subscribe( 
      (res) => {
        res.transactions.reverse();
        this.creditCardInfo = res;
      }, (err) => {

    });
  }

}
