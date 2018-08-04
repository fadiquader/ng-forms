import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
//
import { Signup } from './signup';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit, AfterViewInit {
  languages: string[] = ['en', 'ar'];
  model: Signup = new Signup('', '', '', '', '');
  @ViewChild('f') form: any;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.form.valueChanges.subscribe(
      values => {
        console.log('values, ', values)
      }
    );
  }
  onSubmit() {
    if(this.form.valid) {
      console.log('values ', this.form.value);
    } else {
      console.log('Invalid Form ');
    }
  }

}
