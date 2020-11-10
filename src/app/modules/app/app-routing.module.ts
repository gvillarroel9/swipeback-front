import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInPage } from './pages/sign-in/sign-in.page';
import { SignUpPage } from './pages/sign-up/sign-up.page';
import { AppLayoutComponent } from './app-layout.component';

const routes: Routes = [
  {
    path: 'signin',
    component: SignInPage
  },
  {
    path: 'signup',
    component: SignUpPage
  },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'signin'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
