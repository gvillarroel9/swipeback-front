import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountsService } from '../../../services/accounts/accounts.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-account-deposit',
  templateUrl: './account-deposit.component.html',
  styleUrls: ['./account-deposit.component.css'],
})
export class AccountDepositComponent implements OnInit {
  depositForm: FormGroup;
  accounts: any = [];
  accountsReady = false;
  doingDeposit = false;
  accountSelected = false;
  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountsService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.getAccounts();
  }

  getAccounts() {
    this.accountService.getAccounts().subscribe((res) => {
      this.accounts = res;
      this.accountsReady = true;
    });
  }

  createForm() {
    this.depositForm = this.formBuilder.group({
      accountNumber: ['', Validators.required],
      amount: ['', Validators.required],
      balance: [''],
    });
    this.depositForm.controls.accountNumber.valueChanges.subscribe((value) => {
      this.accountSelected = true;

      if (value) {
        const account = this.accounts.find(
          (element) => element.number === value
        );
        this.depositForm.controls.amount.setValidators([
          Validators.max(9999999999999.99 - account.balance),
          Validators.min(0.01),
          Validators.required,
        ]);
        this.depositForm.updateValueAndValidity();
      }
      console.log(this.depositForm.controls.balance.value);
    });
  }

  setFormValue(attr: string, value: string) {
    this.depositForm.controls[attr].setValue(value);
  }

  deposit() {
    console.log(this.depositForm.value);
    Swal.fire({
      title: '¿Estás seguro?',
      text: `Realizar un depósito por un monto de ${this.depositForm.value.amount}
              a la cuenta ${this.depositForm.value.accountNumber} `,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
      cancelButtonColor: 'Red',
    }).then((result) => {
      if (result.value) {
        this.doingDeposit = true;
        this.accountService.deposit(this.depositForm.value).subscribe(
          (res) => {
            this.showMessage(
              'El depósito se ha realizado con exito',
              'success'
            );
            this.getAccounts();
            this.depositForm.reset();
          },
          (error) => this.showMessage('Hubo un error al depositar', 'error'),
          () => {
            this.doingDeposit = false;
          }
        );
      }
    });
  }

  showMessage(message, type) {
    Swal.fire('', message, type);
  }
}
