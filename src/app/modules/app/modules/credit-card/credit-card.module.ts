import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardListComponent } from './credit-card-list/credit-card-list.component';
import { CreditCardRoutingModule } from './credit-card-routing.module';
import { CreditCardService } from '../../services/credit-card/credit-card.service';
import { CreditCardDetailComponent } from './credit-card-detail/credit-card-detail.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [CreditCardListComponent, CreditCardDetailComponent],
  imports: [
    CommonModule,
    CreditCardRoutingModule,
    NgbPaginationModule
  ],
  providers: [CreditCardService]
})
export class CreditCardModule { }
