import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountsService } from '../../../services/accounts/accounts.service';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css'],
})
export class AccountDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private accountService: AccountsService
  ) {}

  accountInfo: any;
  page: number = 1;
  pageSize: number = 5;
  infoReady = false;
  transactions: [] = [];

  ngOnInit(): void {
    const accountNumber = this.route.snapshot.params.id;
    this.getAccountMovements(accountNumber);
  }

  getAccountMovements(accountNumber) {
    this.accountService.getAccount(accountNumber).subscribe(
      (res) => {
        // res.transactions.reverse();
        this.accountInfo = res;
        this.infoReady = true;
        this.getMovements(this.accountInfo.id);
      },
      (err) => {}
    );
  }

  getMovements(accountId) {
    this.accountService.getMovements(accountId).subscribe((res) => {
      console.log(res);

      this.transactions = res;
    });
  }
}
