import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// pages
import { HomePage } from './pages/home/home.page';

@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }
