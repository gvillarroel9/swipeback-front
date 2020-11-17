import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../../../services/accounts/accounts.service';


@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  constructor(
    private accountService: AccountsService
  ) { }

  ngOnInit(): void {

    this.accountService.getAccounts().subscribe(
      (res) => {
        console.log(res)
      }

    )

  }

}
