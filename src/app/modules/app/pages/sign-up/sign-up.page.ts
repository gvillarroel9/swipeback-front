import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.css']
})
export class SignUpPage implements OnInit {

  signUpForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
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
    console.log(this.signUpForm.value);
  }

}
