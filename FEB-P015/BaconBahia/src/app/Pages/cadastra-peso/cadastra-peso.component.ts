import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from '../../Services/database.service';
import { nonFutureDateValidator } from '../../Validators/non-future-age.validator';
import { PesagemService } from '../../Services/pesagem.service';

@Component({
  selector: 'app-cadastra-peso',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cadastra-peso.component.html',
  styleUrl: './cadastra-peso.component.scss'
})
export class CadastraPesoComponent implements OnInit {
  id: any;
  formPesoCreate: FormGroup;
  // constructor(private DatabaseConection: DatabaseConnectionService)
  constructor(private database: DatabaseService, private pesagemService: PesagemService, private route: ActivatedRoute, private router: Router) {
    this.formPesoCreate = new FormGroup({

      dataPesagem: new FormControl(null, [Validators.required, nonFutureDateValidator()]),
      peso: new FormControl(null, [Validators.required]),

    });
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }


  onSubmit() {
    if (this.formPesoCreate.invalid) {
      alert('Por favor, preencha todos os campos obrigatórios corretamente.');
    }
    else {
      this.database.postPesagem(this.formPesoCreate.value, this.id).subscribe({
        next: () => {
          console.log('Cadastro realizado com sucesso!');
          alert('Cadastro realizado com sucesso!');
          this.pesagemService.notificarNovoPesoAdicionado();
          this.router.navigate(['registroPesagem/', this.id]);
          this.formPesoCreate.reset();
        },
        error: (erro) => {
          console.error('Erro ao cadastrar pesagem:', erro);
          alert('Ocorreu um erro ao cadastrar a pesagem. Por favor, tente novamente.');
        }
      });
    }
  };

}

