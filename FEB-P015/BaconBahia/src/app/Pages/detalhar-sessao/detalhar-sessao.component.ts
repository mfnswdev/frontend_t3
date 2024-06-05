import { Component, OnInit } from '@angular/core';
import { SessaoDBService } from '../../Services/sessao-db.service';
import { DataSessao } from '../../Models/datasessao';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from '../../Services/database.service';
import { CommonModule } from '@angular/common';
import { dataSessaoDetails } from '../../Models/dataSessaoDetail';

@Component({
  selector: 'app-detalhar-sessao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalhar-sessao.component.html',
  styleUrl: './detalhar-sessao.component.scss'
})
export class DetalharSessaoComponent implements OnInit{
  loadedSessao: DataSessao = {
    id: '',
    porcoId: [],
    data: '',
    descricao: '',
    atividades: [],
  };
  loadedPorcos: any[] = [];
  id: any;

 

  constructor(private databaseSessao: SessaoDBService, private route: ActivatedRoute, private router: Router, private databasePorco: DatabaseService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.fetchSessao();
  }

  
  fetchSessao(): void {
    this.databaseSessao.getSessaoByID(this.id)
      .subscribe({
        next: (data: DataSessao) => {
          this.loadedSessao = data;
          console.log(this.loadedSessao);
          console.log(this.loadedSessao.porcoId);
        },
        error: (erro) => {
          console.error('Ocorreu um erro ao buscar os suínos:', erro);
        }
      })

  }
}

