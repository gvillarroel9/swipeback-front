import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountsService } from '../../../services/accounts/accounts.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-account-deposit',
  templateUrl: './account-deposit.component.html',
  styleUrls: ['./account-deposit.component.css']
})
export class AccountDepositComponent implements OnInit {

  depositForm: FormGroup;
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
    this.depositForm = this.formBuilder.group({
      accountNumber: ['', Validators.required],
      amount: ['', Validators.required],
      balance: ['']
    });
  }

  setFormValue(attr: string, value: string) {
    this.depositForm.controls[attr].setValue(value);
  }

  deposit(){
    console.log(this.depositForm.value);
    Swal.fire({
      title: '¿Estás seguro?',
      text: `Realizar un depósito por un monto de ${this.depositForm.value.amount} 
              a la cuenta ${this.depositForm.value.accountNumber} `,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
      cancelButtonColor: 'Red'
    }).then((result) => {
      if (result.value) {
        this.accountService.deposit(this.depositForm.value).subscribe(
          (res) => {
            this.showMessage('El depósito se ha realizado con exito', 'success');
            this.getAccounts();
          },  
          (error) => this.showMessage('Hubo un error al depositar', 'error')
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
