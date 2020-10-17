import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { SignInPage } from './pages/sign-in/sign-in.page';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { AppLayoutComponent } from './app-layout.component';

@NgModule({
  declarations: [
    SignInPage,
    FooterComponent,
    SidebarComponent,
    AppLayoutComponent,
    HeaderComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class AppModule { }
