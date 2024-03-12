import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Datapig } from '../../Models/datapig';
import { DatabaseService } from '../../Services/database.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-listar-animais',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './listar-animais.component.html',
  styleUrl: './listar-animais.component.scss'
})
export class ListarAnimaisComponent implements OnInit {
  loadedAnimais: Datapig[] = [];
    
  filteredAnimais: Datapig[] = []
  paiIdFiltro: string = ''
  maeIdFiltro: string = ''
  dataNascFiltro: string = ''
  dataSaidaFiltro: string = ''
  generoFiltro: string = ''
  statusFiltro: string = ''

  constructor(private database: DatabaseService) { }

 

  ngOnInit(): void {

    this.fetchSuinos();

  }

  fetchSuinos(): void {
    this.database.getData()
      .subscribe({
        next: (data: Datapig[]) => {
          this.loadedAnimais = data;
          this.filteredAnimais = [...this.loadedAnimais]
        },
        error: (erro) => {
          console.error('Ocorreu um erro ao buscar os suínos:', erro);
        }
      })
  }
  
  deleteAnimalByID(id: any) {
    if (window.confirm('Você tem certeza que deseja deletar este animal?')) {
      const indexToRemove = this.loadedAnimais.findIndex((atendimento) => atendimento.id = id);
      this.database.deleteAnimalByID(id).subscribe(() => {
        this.loadedAnimais.splice(indexToRemove, 1);
      });
    }
  }

  applyFilters(): void {
    this.filteredAnimais = this.loadedAnimais.filter(suino => {
      return (!this.paiIdFiltro || suino.paiId.toString().includes(this.paiIdFiltro)) &&
        (!this.maeIdFiltro || suino.maeId.toString().includes(this.maeIdFiltro)) &&
        (!this.dataNascFiltro || suino.dataNasc.includes(this.dataNascFiltro)) &&
        (!this.dataSaidaFiltro || suino.dataSaida.includes(this.dataSaidaFiltro)) &&
        (!this.generoFiltro || suino.genero === this.generoFiltro) &&
        (!this.statusFiltro || suino.status === this.statusFiltro);
    });

    console.log(this.filteredAnimais);
  }

}
