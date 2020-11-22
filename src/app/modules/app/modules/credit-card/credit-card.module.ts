import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardListComponent } from './credit-card-list/credit-card-list.component';
import { CreditCardRoutingModule } from './credit-card-routing.module';
import { CreditCardService } from '../../services/credit-card/credit-card.service';
import { CreditCardDetailComponent } from './credit-card-detail/credit-card-detail.component';



@NgModule({
  declarations: [CreditCardListComponent, CreditCardDetailComponent],
  imports: [
    CommonModule,
    CreditCardRoutingModule
  ],
  providers: [CreditCardService]
})
export class CreditCardModule { }
