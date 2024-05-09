import { Component, OnInit } from '@angular/core';
import { SessaoDBService } from '../../Services/sessao-db.service';
import { DataSessao } from '../../Models/datasessao';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from '../../Services/database.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalhar-sessao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalhar-sessao.component.html',
  styleUrl: './detalhar-sessao.component.scss'
})
export class DetalharSessaoComponent implements OnInit{
  loadedSessao: DataSessao = {} as DataSessao;
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
        },
        error: (erro) => {
          console.error('Ocorreu um erro ao buscar os suínos:', erro);
        }
      })

      this.loadedSessao.porcoId.forEach((item) => {
        // Se item é um objeto, pegue o campo porcoId
        const porcoId = item; // Certifique-se de pegar o valor correto
        console.log(item); // Deve mostrar '3123'
        
        // Agora use o porcoId para buscar os dados no banco de dados
        this.databasePorco.getAnimalByID(porcoId)
          .subscribe({
            next: (data) => {
              this.loadedPorcos.push(data);
            },
            error: (erro) => {
              console.error('Ocorreu um erro ao buscar os suínos:', erro);
            }
          });
    });
    

  }
}

