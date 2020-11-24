import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CurrencyMaskInputMode, NgxCurrencyModule } from 'ngx-currency';

export const customCurrencyMaskConfig = {
  align: 'left',
  allowNegative: false,
  allowZero: true,
  decimal: ',',
  precision: 2,
  prefix: '$ ',
  suffix: '',
  thousands: '.',
  nullable: true,
  min: null,
  max: null,
  inputMode: CurrencyMaskInputMode.FINANCIAL,
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    NgbModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
