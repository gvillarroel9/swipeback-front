import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommerceListComponent } from './commerce-list/commerce-list.component';
import { CommerceDetailsComponent } from './commerce-details/commerce-details.component';


const routes: Routes = [
    { path: '', component: CommerceListComponent },
    { path: 'detail/:id', component: CommerceDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommerceRoutingModule { }