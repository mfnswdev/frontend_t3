import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatabaseService } from '../../Services/database.service';
import { nonFutureDateValidator } from '../../Validators/non-future-age.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-pig',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cadastro-pig.component.html',
  styleUrl: './cadastro-pig.component.scss'
})
export class CadastroPigComponent {
  formAnimalCreate: FormGroup;

  constructor(private dataBase: DatabaseService, private router: Router) {
    this.formAnimalCreate = new FormGroup({
      porcoId: new FormControl('', [Validators.required]),
      paiId: new FormControl('', [Validators.required]),
      maeId: new FormControl('', [Validators.required]),
      dataNasc: new FormControl('', [Validators.required, nonFutureDateValidator()]),
      dataSaida: new FormControl('',),
      status: new FormControl('', [Validators.required]),
      genero: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.formAnimalCreate.invalid) {
      alert('Por favor, preencha todos os campos obrigatórios corretamente.');
    }
    else {
      this.dataBase.postData(this.formAnimalCreate.value).subscribe({
        next: () => {
          console.log('Cadastro realizado com sucesso!');
          alert('Cadastro realizado com sucesso!');
          this.router.navigate(['listarAnimais']);
          this.formAnimalCreate.reset();
        },
        error: (erro) => {
          console.error('Erro ao cadastrar suíno:', erro);
          alert('Ocorreu um erro ao cadastrar o suíno. Por favor, tente novamente.');
        }
      });

    }
  }
}
