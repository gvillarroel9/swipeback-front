import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreditCardListComponent } from './credit-card-list/credit-card-list.component';
import { CreditCardDetailComponent } from './credit-card-detail/credit-card-detail.component';
import { CreditCardPaymentComponent } from './credit-card-payment/credit-card-payment.component';

const routes: Routes = [
  { path: '', component: CreditCardListComponent },
  { path: 'detail/:id', component: CreditCardDetailComponent },
  { path: 'payment', component: CreditCardPaymentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditCardRoutingModule { }