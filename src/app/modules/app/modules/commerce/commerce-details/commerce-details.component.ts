import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountsService } from '../../../services/accounts/accounts.service';
import { CommerceService } from '../../../services/commerce/commerce.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-commerce-details',
  templateUrl: './commerce-details.component.html',
  styleUrls: ['./commerce-details.component.css'],
})
export class CommerceDetailsComponent implements OnInit {
  public commerceInfo: any;
  public transactions: [] = [];
  public infoReady: boolean = false;
  public page: number = 1;
  public pageSize: number = 5;

  constructor(
    private route: ActivatedRoute,
    private _commerceService: CommerceService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    const commerceId = this.route.snapshot.params.id;
    this.getCommerceDetails(commerceId);
  }

  public getCommerceDetails(commerceId: number) {
    this._commerceService.getCommerceDetails(commerceId).subscribe(
      (res) => {
        console.log(res);
        this.commerceInfo = res;
        this.getMovements(this.commerceInfo.accountId);
        this.infoReady = true;
      },
      (err) => {}
    );
  }

  getMovements(accountId) {
    this.http
      .get(`${environment.apiUrl}transactions/account/${accountId}`)
      .subscribe((res: []) => {
        console.log(res);
        this.transactions = res;
      });
  }
}
