import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AccountsService } from '../../../services/accounts/accounts.service';

@Component({
  selector: 'app-account-transaction',
  templateUrl: './account-transaction.component.html',
  styleUrls: ['./account-transaction.component.css']
})
export class AccountTransactionComponent implements OnInit {

  transactionForm: FormGroup;
  accounts: any = [];
  
  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountsService
    ) { }

  ngOnInit(): void {
    this.createForm();
    this.getAccounts();
  }

  getAccounts() {
    this.accountService.getAccounts().subscribe(
      (res) => {
        this.accounts = res;
      }
    )
  }

  createForm() {
    this.transactionForm = this.formBuilder.group({
      toAccountNumber: ['', Validators.required],
      fromAccountNumber: ['', Validators.required],
      amount: ['', Validators.required],
      description: ['', Validators.required],
      balance: ['']
    });
  }

  setFormValue(attr: string, value: string) {
    this.transactionForm.controls[attr].setValue(value);
  }

  makeTransaction(){
    console.log(this.transactionForm.value);
    Swal.fire({
      title: '¿Estás seguro?',
      text: `Realizar una transferencia por un monto de ${this.transactionForm.value.amount} 
              a la cuenta ${this.transactionForm.value.toAccountNumber} `,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
      cancelButtonColor: 'Red'
    }).then((result) => {
      if (result.value) {
        this.accountService.transaction(this.transactionForm.value).subscribe(
          res => {},
          err => {
            this.showMessage('Hubo un error al realizar la transferencia', 'error')
          },
          () =>  {
            this.showMessage('La transferencia de fondos se ha realizado con exito', 'success');         
          }
        )
      } 
    })
  }

  showMessage(message, type){
    Swal.fire(
      '',
      message,
      type
    )
  }

}