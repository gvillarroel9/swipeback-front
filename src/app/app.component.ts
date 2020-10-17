import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>

    <!-- TODO add this to service -->
    <!-- <div id="global-loader"></div> -->
  `,
})
export class AppComponent {
  title = 'swipe-bank-frontend';
}

