import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountsService } from '../../services/accounts/accounts.service'

@NgModule({
  declarations: [AccountListComponent],
  imports: [
    CommonModule,
    AccountsRoutingModule
  ],
  providers: [
    AccountsService
  ]
})
export class AccountsModule { }
