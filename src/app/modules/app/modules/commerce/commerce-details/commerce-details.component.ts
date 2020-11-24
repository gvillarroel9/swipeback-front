import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommerceService } from '../../../services/commerce/commerce.service';

@Component({
  selector: 'app-commerce-details',
  templateUrl: './commerce-details.component.html',
  styleUrls: ['./commerce-details.component.css']
})
export class CommerceDetailsComponent implements OnInit {
  
  public commerceInfo: any;
  public transactions: any[] = [];
  public infoReady: boolean = false;
  public page: number = 1;
  public pageSize: number = 5;

  constructor(private route: ActivatedRoute, private _commerceService: CommerceService) { }

  ngOnInit(): void {
    const commerceId = this.route.snapshot.params.id;
    this.getCommerceDetails(commerceId);
  }

  public getCommerceDetails(commerceId: number){
    this._commerceService.getCommerceDetails(commerceId).subscribe(
      (res) => {
        console.log(res);
        this.commerceInfo = res;
        this.transactions = res.account.transactions;
        this.infoReady = true;
      }, (err) => {

    });
  }

}
