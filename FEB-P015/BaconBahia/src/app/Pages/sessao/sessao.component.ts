import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SessaoDBService } from '../../Services/sessao-db.service';
import { DataSessao } from '../../Models/datasessao';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sessao',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './sessao.component.html',
  styleUrl: './sessao.component.scss'
})
export class SessaoComponent implements OnInit {
  loadedSessoes: DataSessao[] = [];

  ngOnInit(): void {
    this.fetchSessoes();
  }

  constructor(private sessao : SessaoDBService){}

  fetchSessoes(): void {
    this.sessao.getData()
      .subscribe({
        next: (data: DataSessao[]) => {
          this.loadedSessoes = data;
        },
        error: (erro) => {
          console.error('Ocorreu um erro ao buscar a sessão:', erro);
        }
      })
  }

  deleteSessaoByID(id: any) {
    if (window.confirm('Tem certeza que deseja deletar esta sessão?')) {
      const indexToRemove = this.loadedSessoes.findIndex((sessao) => sessao.id = id);
      this.sessao.deleteSessaoByID(id).subscribe(() => {
        this.loadedSessoes.splice(indexToRemove, 1);
      })
    }
  }


}
