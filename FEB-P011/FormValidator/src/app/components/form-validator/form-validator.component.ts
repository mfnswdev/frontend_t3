import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatIconModule, CommonModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './form-validator.component.html',
  styleUrl: './form-validator.component.scss'
})
export class FormValidatorComponent {
  FormTest!: FormGroup;
  constructor() {
    this.FormTest = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z]+ [A-Za-z]+$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      gender: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      user: new FormControl('', [Validators.maxLength(12), Validators.required,]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
      occupation: new FormControl('', [Validators.required]),
    });
  }
  onSubmit() {
    console.log("OLA mundo");
    console.log(this.FormTest.value);
  }

}
