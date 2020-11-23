import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../../../services/accounts/accounts.service';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css'],
})
export class AccountListComponent implements OnInit {
  accounts = [];
  page: number = 1;
  pageSize: number = 5;
  accountsReady = false;
  constructor(private accountService: AccountsService) {}

  ngOnInit(): void {
    this.getAccounts();
  }
  getAccounts() {
    this.accountService.getAccounts().subscribe((res) => {
      this.accounts = res;
      this.accountsReady = true;
    });
  }

  createAccount() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Estás a punto de crear una cuenta bancaria.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
      cancelButtonColor: 'Red',
    }).then((result) => {
      if (result.value) {
        this.accountService
          .createAccount()
          .subscribe((res) => this.accounts.push(res));
      }
    });
  }
}
