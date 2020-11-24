import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountsService } from '../../../services/accounts/accounts.service';
import { CreditCardService } from '../../../services/credit-card/credit-card.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-credit-card-payment',
  templateUrl: './credit-card-payment.component.html',
  styleUrls: ['./credit-card-payment.component.css']
})
export class CreditCardPaymentComponent implements OnInit {

  paymentForm: FormGroup;
  accounts: any = [];
  creditCards: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountsService,
    private creditCardService: CreditCardService
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.getAccounts();
    this.getCreditCards();
  }

  public createForm(){
    this.paymentForm = this.formBuilder.group({
      accountNumber: ['', Validators.required],
      creditCardNumber: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(1)]]
    });
  };

  public getAccounts() {
    this.accountService.getAccounts().subscribe(
      (res) => {
        this.accounts = res;
      }
    )
  }

  public getCreditCards(){
    this.creditCardService.getCreditCards().subscribe( 
      (res) => {
        this.creditCards = res;
    });
  }

  public setFormValue(attr:string, value: string){
    this.paymentForm.controls[attr].setValue(value);
  }
  
  public pay(){
    console.log(this.paymentForm.value);
    Swal.fire({
      title: '¿Estás seguro?',
      text: `Realizar un pago por un monto de ${this.paymentForm.value.amount} 
              a la tarjeta ${this.paymentForm.value.creditCardNumber} `,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
      cancelButtonColor: 'Red'
    }).then( (result) => {
      if(result.value){
        this.creditCardService.payment(this.paymentForm.value).subscribe(
          (res) => {
            this.showMessage('El pago se ha realizado con éxito', 'success');
            this.getAccounts();
          },
          (error) => {
            console.log(error);
            this.showMessage('Hubo un error al pagar', 'error')
          }
        )
      }
    });
  }

  public showMessage(message, type){
    Swal.fire(
      '',
      message,
      type
    )
  }
}
