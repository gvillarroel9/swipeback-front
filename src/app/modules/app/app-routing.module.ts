import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInPage } from './pages/sign-in/sign-in.page';
import { SignUpPage } from './pages/sign-up/sign-up.page';
import { AppLayoutComponent } from './app-layout.component';
import { AuthGuard } from './guards/auth.guard';
import { CreditCardListComponent } from './modules/credit-card/credit-card-list/credit-card-list.component';

const routes: Routes = [
  {
    path: 'signin',
    component: SignInPage,
  },
  {
    path: 'signup',
    component: SignUpPage,
  },
  {
    path: '',
    component: AppLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./modules/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'credit-card',
        loadChildren: () =>
          import('./modules/credit-card/credit-card.module').then(
            (m) => m.CreditCardModule
          ),
      },
      {
        path: 'account',
        loadChildren: () =>
          import('./modules/accounts/accounts.module').then(
            (m) => m.AccountsModule
          ),
      },
      { path: '', redirectTo: 'dashboard' },
    ],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'signin',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
