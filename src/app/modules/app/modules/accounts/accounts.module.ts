import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountsService } from '../../services/accounts/accounts.service';
import { AccountDepositComponent } from './account-deposit/account-deposit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountWithdrawComponent } from './account-withdraw/account-withdraw.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { AccountTransactionComponent } from './account-transaction/account-transaction.component';
import { NgxCurrencyModule } from 'ngx-currency';
@NgModule({
  declarations: [
    AccountListComponent,
    AccountDepositComponent,
    AccountWithdrawComponent,
    AccountDetailComponent,
    AccountTransactionComponent,
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    NgxCurrencyModule,
  ],
  providers: [AccountsService],
})
export class AccountsModule {}
