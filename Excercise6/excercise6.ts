/*
Exercice: Forms (8 points)
Complete and modify AppUserForm class to use Angular Reactive Forms. Add a button to submit.

The form should return data in this format

{
  email: string; // mandatory, must be a email
  name: string; // mandatory, max 128 characters
  birthday?: Date; // Not mandatory, must be less than today
  address: { // mandatory
    zip: number; // mandatory
    city: string; // mandatory, must contains only alpha uppercase and lower and space
  };
}

@Component({
  selector: 'app-user-form',
  template: `
    <form>
        <input type="text" placeholder="email">
        <input type="text" placeholder="name">
        <input type="date" placeholder="birthday">
        <input type="number" placeholder="zip">
        <input type="text" placeholder="city">
    </form>
  `
})
export class AppUserForm {

  @Output()
  event = new EventEmitter<{ email: string; name: string; birthday: Date; address: { zip: number; city: string; };}>;
  
  constructor(
    private formBuilder: FormBuilder
  ) {
  }

  doSubmit(): void {
    this.event.emit(...);
  }
}
*/

//for this excercise, the imports needed are the follow:
import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


export class AppUserForm {

    @Output() event = new EventEmitter<{ email: string; name: string; birthday: Date; address: { zip: number; city: string; }; }>;
    userForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.userForm = this.formBuilder.group(
            {
                name: ['', [Validators.required, Validators.maxLength(128)]],
                email: ['', [Validators.required, Validators.email]],
                birthday: [null, [Validators.max(new Date())]],
                address: this.formBuilder.group(
                    {
                        zip: ['', [Validators.required]],
                        city: ['', [Validators.required, Validators.pattern(/^[a-z\s]+$/i)]],
                    })
            })
    }

    doSubmit(): void {
        this.event.emit(this.userForm.value);
    }
}

