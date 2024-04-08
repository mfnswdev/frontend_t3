import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SessaoDBService } from '../../Services/sessao-db.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Datapig } from '../../Models/datapig';
import { DatabaseService } from '../../Services/database.service';
import { CommonModule } from '@angular/common';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-cadastro-sessao',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, NgMultiSelectDropDownModule],
  templateUrl: './cadastro-sessao.component.html',
  styleUrl: './cadastro-sessao.component.scss'
})
export class CadastroSessaoComponent implements OnInit {
  dropdownList: any;
  dropdownSettings: any;

  dropdownAtividadeList: any;
  dropdownAtividadeSettings: any;

  formSessaoCreate: FormGroup;
  loadedAnimais: Datapig[] = [];
  constructor(private database: SessaoDBService, private route: ActivatedRoute, private router: Router, private dbService: DatabaseService) {
    this.formSessaoCreate = new FormGroup({
      'porcoId': new FormControl([], Validators.required),
      'descricao': new FormControl('', Validators.required),
      'data': new FormControl('', Validators.required),
      'atividades': new FormControl([], Validators.required),
      'statusAtividades': new FormControl([0,1], Validators.required),
    })
  }
    ngOnInit(): void {
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'porcoId',
      selectAllText: 'Selecionar tudo',
      unSelectAllText: 'Desmarcar tudo',
    }

    this.dropdownAtividadeSettings = {
      singleSelection: false,
      idField: 'atv_id',
      textField: 'atv_text',
      selectAllText: 'Selecionar tudo',
      unSelectAllText: 'Desmarcar tudo',
    }

    this.dropdownAtividadeList = this.getAtividades();

     this.fetchSuinos();

    console.log(this.loadedAnimais);
  }

  getAtividades() {
    return [{ atv_id: 1, atv_text: 'Vacinação' }, 
    { atv_id: 2, atv_text: 'Vermifulgação' }, 
    { atv_id: 3, atv_text: 'Checkup clínico' }, 
    { atv_id: 4, atv_text: 'Eutanasia' }]
  }

   fetchSuinos(): void {
    this.dbService.getData()
      .subscribe({
        next: (data: Datapig[]) => {
          this.loadedAnimais = data;
        },
        error: (erro) => {
          console.error('Ocorreu um erro ao buscar os suínos:', erro);
        }
      })
  }


  onSubmit() {
    console.log(this.formSessaoCreate.value);
    if (this.formSessaoCreate.invalid) {
      alert('Por favor, preencha todos os campos obrigatórios corretamente!');
    }
    else {
      this.database.postData(this.formSessaoCreate.value).subscribe({
        next: () => {
          console.log('Sessão registrada com sucesso!');
          alert('Sessão registrada com sucesso!');
          this.router.navigate(['listarSessoes']);
        },
        error: (erro) => {
          console.error('Erro ao registrar sessão:', erro);
          alert('Ocorreu um erro ao registrar a sessão. Por favor, tente novamente!');
        }
      });
    }
  }
}
