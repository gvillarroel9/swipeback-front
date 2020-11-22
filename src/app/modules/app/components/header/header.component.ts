import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from '../../services/local-storage/local.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  constructor(
    private localService: LocalService,
    private router: Router
  ) { }

  userData: any;

  ngOnInit(): void {
    this.userData = this.localService.getValue('userData');
  }

  signOut(){
    this.localService.clearToken();
    this.router.navigate(['/app/signIn'])
  }

}
