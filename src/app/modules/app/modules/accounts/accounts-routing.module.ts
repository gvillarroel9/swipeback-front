import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountWithdrawComponent } from './account-withdraw/account-withdraw.component';
import { AccountDepositComponent } from './account-deposit/account-deposit.component';
import { AccountListComponent } from './account-list/account-list.component'

const routes: Routes = [
  { path: '', component: AccountListComponent },
  { path: 'deposit', component: AccountDepositComponent },
  { path: 'withdraw', component: AccountWithdrawComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
