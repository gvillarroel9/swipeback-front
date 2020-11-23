import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AccountsService } from '../../../services/accounts/accounts.service';

@Component({
  selector: 'app-account-transaction',
  templateUrl: './account-transaction.component.html',
  styleUrls: ['./account-transaction.component.css'],
})
export class AccountTransactionComponent implements OnInit {
  transactionForm: FormGroup;
  accounts: any[] = [];
  accountsReady = false;
  accountSelected = false;
  doingTransaction = false;
  transactionResult = undefined;
  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountsService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.getAccounts();
    this.transactionForm.controls.fromAccountNumber.valueChanges.subscribe(
      (value) => {
        if (value) {
          console.log('value', value);
          const account = this.accounts.find(
            (element) => element.number === value
          );
          this.transactionForm.controls.amount.setValidators([
            Validators.max(account.balance),
            Validators.min(0.01),
            Validators.required,
          ]);
          this.transactionForm.updateValueAndValidity();
          this.accountSelected = true;
          this.transactionResult = undefined;
        }
      }
    );
  }

  getAccounts() {
    this.accountService.getAccounts().subscribe((res) => {
      this.accounts = res;
      this.accountsReady = true;
      console.log(res);
    });
  }

  createForm() {
    this.transactionForm = this.formBuilder.group({
      toAccountNumber: ['', Validators.required],
      fromAccountNumber: ['', Validators.required],
      amount: ['', Validators.required],
      description: ['', Validators.required],
      balance: [''],
    });
  }

  setFormValue(attr: string, value: string) {
    this.transactionForm.controls[attr].setValue(value);
  }

  makeTransaction() {
    if (this.transactionForm.invalid || this.doingTransaction) {
      return;
    }

    Swal.fire({
      title: '¿Estás seguro?',
      text: `Realizar una transferencia por un monto de ${this.transactionForm.value.amount}
              a la cuenta ${this.transactionForm.value.toAccountNumber} `,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
      cancelButtonColor: 'Red',
    }).then((result) => {
      if (result.value) {
        this.doingTransaction = true;

        this.accountService.transaction(this.transactionForm.value).subscribe(
          (res) => {
            console.log(res);

            this.accountsReady = false;
            this.accountSelected = false;
            this.getAccounts();
            this.transactionForm.reset();
            this.transactionResult = res;
            console.log(res);
          },
          (err) => {
            this.showMessage(
              err.error.message ?? 'Hubo un error al realizar la transferencia',
              'error'
            );
          },
          () => {
            this.doingTransaction = false;

            this.showMessage(
              'La transferencia de fondos se ha realizado con exito',
              'success'
            );
          }
        );
      }
    });
  }

  showMessage(message, type) {
    Swal.fire('', message, type);
  }
}
