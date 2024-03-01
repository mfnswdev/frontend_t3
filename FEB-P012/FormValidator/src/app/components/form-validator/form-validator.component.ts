import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { createStrongPassword } from '../auth/validators';
import { createBirthdayValidator } from '../auth/birthday-validator';
import { createBirthmonthValidator } from '../auth/birthmonth-validator';
import { createBirthyearValidator } from '../auth/birthyear-validator';
import { FormDataService } from '../../services/form-data.service';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatIconModule, CommonModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './form-validator.component.html',
  styleUrl: './form-validator.component.scss'
})
export class FormValidatorComponent implements OnInit {
  FormTest!: FormGroup;

  formData!: any;
  status!: string;
  constructor(private formDataService: FormDataService, private formService: FormService) {
    this.FormTest = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z]+ [A-Za-z]+$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      gender: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      user: new FormControl('', [Validators.maxLength(12), Validators.required,]),
      password: new FormControl('', [Validators.required, Validators.minLength(4), createStrongPassword()]),
      occupation: new FormControl('', [Validators.required]),
      day: new FormControl('', [Validators.required, Validators.maxLength(2), createBirthdayValidator()]),
      month: new FormControl('', [Validators.required, Validators.maxLength(2), createBirthmonthValidator()]),
      year: new FormControl('', [Validators.required, Validators.minLength(4), createBirthyearValidator()]),
    });

    
  }
  ngOnInit(): void {
   

    this.formDataService.setForm(this.FormTest);

    this.formService.getValueChanges(this.FormTest).subscribe((formData) => {
      this.formData = formData;
    });

    this.formService.getStatusChanges(this.FormTest).subscribe(status => {
      this.status = status
    });



  }
  onSubmit() {
    
    console.log(this.formDataService.getFormData())
    alert("Este é o JSON do formulário: " + JSON.stringify(this.FormTest.value));
    console.log(this.FormTest.value);
  }

}
