import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountsService } from '../../services/accounts/accounts.service';
import { AccountDepositComponent } from './account-deposit/account-deposit.component'
import { ReactiveFormsModule } from '@angular/forms';
import { AccountWithdrawComponent } from './account-withdraw/account-withdraw.component';

@NgModule({
  declarations: [
    AccountListComponent, 
    AccountDepositComponent,
    AccountWithdrawComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    AccountsService
  ]
})
export class AccountsModule { }
