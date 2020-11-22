import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountsService } from '../../services/accounts/accounts.service';
import { AccountDepositComponent } from './account-deposit/account-deposit.component'
import { ReactiveFormsModule } from '@angular/forms';
import { AccountWithdrawComponent } from './account-withdraw/account-withdraw.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AccountListComponent, 
    AccountDepositComponent,
    AccountWithdrawComponent,
    AccountDetailComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    ReactiveFormsModule,
    NgbPaginationModule
  ],
  providers: [
    AccountsService
  ]
})
export class AccountsModule { }
