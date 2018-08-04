import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
//
import { passwordValidator } from './password-validator';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent implements OnInit {
  languages: string[] = ['en', 'ar'];
  myForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  language: FormControl;
  constructor() { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();

    this.myForm.valueChanges.subscribe(
      values => {
        console.log('values, ', values)
      }
    );
    this.email.valueChanges.subscribe(
      emailValue => {
        console.log('emailValue, ', emailValue)

      }
    )
  }

  createFormControls() {
    this.firstName =  new FormControl('', [
      Validators.required
    ]);
    this.lastName =  new FormControl('', [
      Validators.required
    ]);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern('[^ @]*@[^ @]*')
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      passwordValidator,
    ]);
    this.language = new FormControl();
  }

  createForm() {
    this.myForm = new FormGroup({
      name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName,
      }),
      email: this.email,
      password: this.password,
      language: this.language,
    });
  }

  onSubmit() {
    if(this.myForm.valid) {
      console.log(this.myForm.value);
      this.myForm.reset();
    } else {
      console.log('invalid form')
    }
  }

}
