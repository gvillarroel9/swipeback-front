import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { LocalService } from '../../services/local-storage/local.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.css']
})
export class SignInPage implements OnInit {

  signInForm: FormGroup;
  error: any = null;
  success: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private localService: LocalService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.signInForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  signIn(){
    this.error = null;
    this.success = false;
    if(this.signInForm.valid){
      this.authService.signIn(this.signInForm.value).subscribe(
        res => { 
          this.success = true;
          this.localService.setValue('userData', res);
          this.router.navigate(['app/dashboard']);
        },
        err => { this.error = err.error.message;}       
      );
    };  
  }

}
