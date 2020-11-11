import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/modules/app/services/auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.css']
})
export class SignUpPage implements OnInit {

  signUpForm: FormGroup;
  errors: any[] = [];
  success: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.signUpForm = this.formBuilder.group({
      dni: ['', Validators.required],
      username: ['', Validators.required],
      type: ['', Validators.required],
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      password: ['', [Validators.required]],
      cPassword: ['', [Validators.required]],
      terms: ['', Validators.required]
    });
  }

  setFormValue(attr: string, value: string) {
    this.signUpForm.controls[attr].setValue(value);
  }

  signUp(){
    this.errors = [];
    this.success = false;
    if(this.signUpForm.valid){
      this.authService.signUp(this.signUpForm.value).subscribe(
        res => {},
        err => {
          this.errors = err.error.message;
        },
        () =>  {
          this.success = true;          
        }        
      );
    };    
  }

}
