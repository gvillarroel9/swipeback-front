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

  ngOnInit(): void {
    const accountNumber = this.route.snapshot.params.id;
    this.getAccountMovements(accountNumber);
  }

  getAccountMovements(accountNumber) {
    this.accountService.getMovements(accountNumber).subscribe(
      (res) => {
        res.transactions.reverse();
        this.accountInfo = res;
      },
      (err) => {}
    );
  }
}
