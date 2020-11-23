import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountWithdrawComponent } from './account-withdraw/account-withdraw.component';
import { AccountDepositComponent } from './account-deposit/account-deposit.component';
import { AccountListComponent } from './account-list/account-list.component'
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { AccountTransactionComponent } from './account-transaction/account-transaction.component';

const routes: Routes = [
  { path: '', component: AccountListComponent },
  { path: 'deposit', component: AccountDepositComponent },
  { path: 'withdraw', component: AccountWithdrawComponent },
  { path: 'detail/:id', component: AccountDetailComponent },
  { path: 'transaction', component: AccountTransactionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
