import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Datapeso } from '../../Models/datapeso';
import { DatabaseService } from '../../Services/database.service';
import { PesagemService } from '../../Services/pesagem.service';

@Component({
  selector: 'app-listar-pesos',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './listar-pesos.component.html',
  styleUrl: './listar-pesos.component.scss'
})
export class ListarPesosComponent {
  loadedPesagem: Datapeso[] = [];
  id: any;
  constructor(private database: DatabaseService, private pesagemService: PesagemService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');
    this.ListarPesagens();
    console.log(this.loadedPesagem)


  }

  ListarPesagens() {
    this.database.getPesagemByID(this.id).subscribe((response) => {
      this.loadedPesagem = response;
      console.log(response);
    });

  }
  deletePesagemByID(idList: any, idItem: any) {
    const indexToRemove = this.loadedPesagem.findIndex((pesagem) => pesagem.id = idItem);
    this.pesagemService.notificarNovoPesoAdicionado();
      this.database.deletePesagemByID(idList, idItem).subscribe(() => {
        this.loadedPesagem.splice(indexToRemove, 1);
      });
  }

}
