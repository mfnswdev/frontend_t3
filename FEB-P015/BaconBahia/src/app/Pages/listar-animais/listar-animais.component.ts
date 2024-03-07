import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Datapig } from '../../Models/datapig';
import { DatabaseService } from '../../Services/database.service';

@Component({
  selector: 'app-listar-animais',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './listar-animais.component.html',
  styleUrl: './listar-animais.component.scss'
})
export class ListarAnimaisComponent {
  loadedAnimais: Datapig[] = [];

  constructor(private database: DatabaseService) { }

  ngOnInit(): void {

    this.ListarAnimais();

  }

  ListarAnimais() {
    this.database.getData().subscribe((response) => {
      this.loadedAnimais = response;
    });

  }
  deleteAnimalByID(id: any) {
    if (window.confirm('Você tem certeza que deseja deletar este animal?')) {
      const indexToRemove = this.loadedAnimais.findIndex((atendimento) => atendimento.id = id);
      this.database.deleteAnimalByID(id).subscribe(() => {
        this.loadedAnimais.splice(indexToRemove, 1);
      });
    }
  }
}
