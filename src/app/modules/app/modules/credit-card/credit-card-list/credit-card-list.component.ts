import { Component, OnInit } from '@angular/core';
import { CreditCardService } from '../../../services/credit-card/credit-card.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-credit-card-list',
  templateUrl: './credit-card-list.component.html',
  styleUrls: ['./credit-card-list.component.css'],
})
export class CreditCardListComponent {
  public creditCards = [];
  public creditCardsReady = false;
  public page: number = 1;
  public pageSize: number = 5;
  
  constructor(private _creditCardService: CreditCardService) {
    this._creditCardService.getCreditCards().subscribe((res) => {
      this.creditCards = res;
      this.creditCardsReady = true;
    });
  }

  ngOnInit(): void {}

  public createCreditCard() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Estás a punto de crear una tarjeta de crédito.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
      cancelButtonColor: 'Red',
    }).then((result) => {
      if (result.value) {
        this._creditCardService.postCreditCard().subscribe((res) => {
          this.creditCards.push(res);
        });
        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
      }
    });
  }
}
