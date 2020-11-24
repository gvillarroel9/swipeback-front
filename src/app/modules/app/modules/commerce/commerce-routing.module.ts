import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommerceListComponent } from './commerce-list/commerce-list.component';


const routes: Routes = [
    { path: '', component: CommerceListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommerceRoutingModule { }