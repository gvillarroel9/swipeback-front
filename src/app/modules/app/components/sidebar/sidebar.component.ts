import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { LocalService } from '../../services/local-storage/local.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {

  constructor() {

  }

  navItems = [
    {label: 'Resumen', url: 'dashboard', icon: 'fa fa-dashboard' ,dropdown: false},
    {label: 'Transferencias', url: 'account/transaction', icon: 'fa fa-exchange' ,dropdown: false},
    {label: 'Cuentas', url: 'account', icon: 'fa fa-bank' ,dropdown: true, 
      subNavItems: [
        {label: 'Mis cuentas', url: 'account'},
        {label: 'Depositar', url: 'account/deposit'},
        {label: 'Retirar', url: 'account/withdraw'},
      ]
    },
    {label: 'Tarjetas de Crédito', url: 'credit-card', icon: 'fa fa-credit-card' , dropdown: true, 
      subNavItems: [
        {label: 'Mis tarjetas', url: 'credit-card', icon: 'fa fa-credit-card'},
        {label: 'Pagar', url: 'credit-card/payment', icon: 'fa fa-credit-card'},
      ]
    },
    {label: 'Comercios', url: 'commerce', icon: 'fa fa-shopping-bag', dropdown: true,
      subNavItems: [
        {label: 'Mis comercios', url: 'commerce', icon: 'fa fa-shopping-bag'}
      ]
    }
  ];

  ngOnInit() {

  }

}
