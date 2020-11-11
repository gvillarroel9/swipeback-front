import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { SignInPage } from './pages/sign-in/sign-in.page';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { AppLayoutComponent } from './app-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpPage } from './pages/sign-up/sign-up.page';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth/auth.service';

@NgModule({
  declarations: [
    SignInPage,
    SignUpPage,
    FooterComponent,
    SidebarComponent,
    AppLayoutComponent,
    HeaderComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    AuthService
  ]
})
export class AppModule { }
