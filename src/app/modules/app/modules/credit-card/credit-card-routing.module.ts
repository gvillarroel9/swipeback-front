import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreditCardListComponent } from './credit-card-list/credit-card-list.component';
import { CreditCardDetailComponent } from './credit-card-detail/credit-card-detail.component';

const routes: Routes = [
  { path: '', component: CreditCardListComponent },
  { path: 'detail/:id', component: CreditCardDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditCardRoutingModule { }