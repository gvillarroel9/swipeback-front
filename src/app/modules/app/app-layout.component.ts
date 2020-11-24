import { Component } from '@angular/core';

@Component({
  template: `
    <div class="page">
      <div class="page-main">
        <app-header></app-header>
        <div class="wrapper">
          <app-sidebar></app-sidebar>
          <div class="content-area">
            <router-outlet></router-outlet>
          </div>
        </div>
      </div>
      <app-footer></app-footer>
    </div>
  `,
})
export class AppLayoutComponent {}
