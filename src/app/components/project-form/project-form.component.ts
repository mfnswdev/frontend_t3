import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';

@Component({
  selector: 'app-project-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,BtnPrimaryComponent],
  templateUrl: './project-form.component.html',
  styleUrl: './project-form.component.scss'
})
export class ProjectFormComponent {
  projectForm!: FormGroup;

  constructor() {
    this.projectForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      company: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      type: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      budget: new FormControl('', [Validators.required]),
      deadline: new FormControl('', [Validators.required]),
    });


  }
  onSubmit() {
    if (this.projectForm.invalid) {
      alert('Por favor, preencha todos os campos obrigatórios corretamente.');
    }
    else {
      alert('Projeto enviado com sucesso!');
      this.projectForm.reset();
    }
  }
}
