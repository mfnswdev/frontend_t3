import { Component } from '@angular/core';
import { DatabaseService } from '../../Services/database.service';
import { PesagemService } from '../../Services/pesagem.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Datapeso } from '../../Models/datapeso';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-peso',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './editar-peso.component.html',
  styleUrl: './editar-peso.component.scss'
})
export class EditarPesoComponent {

  form!: FormGroup;
  data!: Datapeso;
  id: any;
  pesagemId: any;

  constructor(private dataBaseService: DatabaseService, private pesagemService: PesagemService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
   
    this.form = new FormGroup({
      'peso': new FormControl(null, [Validators.required]),
    });

    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.pesagemId = params.get('pesagemId');
    });

    this.dataBaseService.getPesagemDbByID(this.id, this.pesagemId).subscribe(data => {
      console.log(data);
      this.form.patchValue(data);
    });

    console.log(this.id);
    console.log(this.pesagemId);
  }

  cancel() {
    this.router.navigate([`registroPesagem/${this.id}`]);
  }

  update() {
    this.dataBaseService.updatePesagem(this.id, this.pesagemId, this.form.value.peso).subscribe(res => {
      console.log(res);
      alert('Peso atualizado com sucesso!');
      this.pesagemService.notificarNovoPesoAdicionado();
    });

    this.form.reset();
    this.router.navigate([`registroPesagem/${this.id}`]);
  }

}
