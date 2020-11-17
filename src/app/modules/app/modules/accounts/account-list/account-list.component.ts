import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../../../services/accounts/accounts.service';


@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  accounts = [];

  constructor(
    private accountService: AccountsService
  ) { }

  ngOnInit(): void {
    this.getAccounts();
  }
  getAccounts() {
    this.accountService.getAccounts().subscribe(
      (res) => {
        this.accounts = res;
      }
    )
  }

  createAccount(){
      this.accountService.createAccount().subscribe(
        (res) => this.accounts.push(res)
      )
  }

}
