import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { formControlBinding } from '@angular/forms/src/directives/reactive_directives/form_control_directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  signupForm: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      'username': new FormControl(null),
      'email': new FormControl(null),
      'gender': new FormControl('male')
    });
  }
}
