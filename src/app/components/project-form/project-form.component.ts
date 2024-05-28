import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { dbFormService } from '../../services/dbForm.service';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';

@Component({
  selector: 'app-project-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, BtnPrimaryComponent],
  templateUrl: './project-form.component.html',
  styleUrl: './project-form.component.scss'
})
export class ProjectFormComponent implements OnInit {
  projectForm!: FormGroup;

  constructor(private dbConnection: dbFormService, private router: Router) {
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
  ngOnInit(): void {
    this.dbConnection.getData().subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (erro) => {
        console.error('Erro ao buscar dados', erro);
      }
    });
  }

  onSubmit() {
    if (this.projectForm.invalid) {
      alert('Por favor, preencha todos os campos obrigatórios corretamente.');
    }
    else {
      this.dbConnection.postData(this.projectForm.value).subscribe({
        next: () => {
          alert('Solicitação feita com sucesso!');
          this.router.navigate(['home']);
          this.projectForm.reset();
        },
        error: (erro) => {
          console.error('Erro ao enviar solicitação', erro);
          alert('Ocorreu um erro ao enviar solicitação. Por favor, tente novamente.');
        }
      });

    }
  }
}
