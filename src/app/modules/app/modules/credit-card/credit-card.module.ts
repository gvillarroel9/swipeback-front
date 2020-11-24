import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardListComponent } from './credit-card-list/credit-card-list.component';
import { CreditCardRoutingModule } from './credit-card-routing.module';
import { CreditCardService } from '../../services/credit-card/credit-card.service';
import { CreditCardDetailComponent } from './credit-card-detail/credit-card-detail.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { CreditCardPaymentComponent } from './credit-card-payment/credit-card-payment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountsService } from '../../services/accounts/accounts.service';
import { NgxCurrencyModule } from 'ngx-currency';

@NgModule({
  declarations: [
    CreditCardListComponent,
    CreditCardDetailComponent,
    CreditCardPaymentComponent,
  ],
  imports: [
    CommonModule,
    CreditCardRoutingModule,
    NgbPaginationModule,
    ReactiveFormsModule,
    NgxCurrencyModule,
  ],
  providers: [CreditCardService, AccountsService],
})
export class CreditCardModule {}
