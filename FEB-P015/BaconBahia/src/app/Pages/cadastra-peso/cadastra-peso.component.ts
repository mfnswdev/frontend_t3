import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastra-peso',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cadastra-peso.component.html',
  styleUrl: './cadastra-peso.component.scss'
})
export class CadastraPesoComponent {
  formPesoCreate: FormGroup;
  // constructor(private DatabaseConection: DatabaseConnectionService)
  constructor() {
    this.formPesoCreate = new FormGroup({
      porcoId: new FormControl('', [Validators.required]),
      dataNasc: new FormControl('', [Validators.required]),
      porcoPeso: new FormControl('', [Validators.required]),

    });
  }

  onSubmit() {

    // this.DatabaseConection.postData(this.formAtendimento.value).
    //   subscribe(responseServe => { console.log(responseServe) });
    // this.formAtendimento.reset();

  };
}

