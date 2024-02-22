import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServiceBancoService } from '../../services/service-banco.service';


@Component({
  selector: 'app-cadastrar-atendimento',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cadastrar-atendimento.component.html',
  styleUrl: './cadastrar-atendimento.component.scss'
})
export class CadastrarAtendimentoComponent {
  FormTest!: FormGroup;
  constructor(private obj : ServiceBancoService) {
    this.FormTest = new FormGroup({
      dataConsulta: new FormControl('', Validators.required),
      nomeTutor: new FormControl('', Validators.required),
      nomePet: new FormControl('', Validators.required),
      tipoPet: new FormControl('', Validators.required),
      racaPet: new FormControl('', Validators.required),
      obs: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    
    this.obj.salvarConsulta(this.FormTest.value);
    console.log(this.obj.getConsultas());

    this.FormTest.reset();
  }
  
}
