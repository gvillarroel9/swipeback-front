import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommerceRoutingModule } from './commerce-routing.module';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { CommerceListComponent } from './commerce-list/commerce-list.component';
import { CommerceService } from '../../services/commerce/commerce.service';
import { CommerceDetailsComponent } from './commerce-details/commerce-details.component';



@NgModule({
  declarations: [CommerceListComponent, CommerceDetailsComponent],
  imports: [
    CommonModule,
    CommerceRoutingModule,
    NgbPaginationModule
  ],
  providers: [CommerceService]
})
export class CommerceModule { }
