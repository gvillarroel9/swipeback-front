import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './core/pages/home/home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'app',
    loadChildren: () => import('./modules/app/app.module').then(m => m.AppModule) },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
