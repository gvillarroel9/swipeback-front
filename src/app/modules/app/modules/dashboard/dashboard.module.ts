import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { CreditCardService } from '../../services/credit-card/credit-card.service';
import { AccountsService } from '../../services/accounts/accounts.service';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartsModule
  ],
  providers: [
    CreditCardService,
    AccountsService
  ]
})
export class DashboardModule { }
