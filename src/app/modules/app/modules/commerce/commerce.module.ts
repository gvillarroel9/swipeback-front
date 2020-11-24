import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommerceRoutingModule } from './commerce-routing.module';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { CommerceListComponent } from './commerce-list/commerce-list.component';



@NgModule({
  declarations: [CommerceListComponent],
  imports: [
    CommonModule,
    CommerceRoutingModule,
    NgbPaginationModule
  ]
})
export class CommerceModule { }
