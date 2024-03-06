import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatabaseService } from '../../Services/database.service';

@Component({
  selector: 'app-cadastro-pig',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cadastro-pig.component.html',
  styleUrl: './cadastro-pig.component.scss'
})
export class CadastroPigComponent {
  formAnimalCreate: FormGroup;

  constructor(private dataBase: DatabaseService) {
    this.formAnimalCreate = new FormGroup({
      porcoId: new FormControl('', [Validators.required]),
      paiId: new FormControl('', [Validators.required]),
      maeId: new FormControl('', [Validators.required]),
      dataNasc: new FormControl('', [Validators.required]),
      dataSaida: new FormControl('',),
      status: new FormControl('', [Validators.required]),
      genero: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {

    this.dataBase.postData(this.formAnimalCreate.value).
      subscribe(responseServe => { console.log(responseServe) });
    this.formAnimalCreate.reset();

  }

}
