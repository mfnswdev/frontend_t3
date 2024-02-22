import { Component, OnInit } from '@angular/core';
import { ServiceBancoService } from '../../services/service-banco.service';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-atendimento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-atendimento.component.html',
  styleUrl: './lista-atendimento.component.scss'
})
export class ListaAtendimentoComponent implements OnInit {
  constructor(private Database: ServiceBancoService){}
  ngOnInit(): void {
    this.listConsultas();
  }
  public consultas : any[] = [];

  listConsultas(){
    this.consultas = this.Database.getConsultas();
  }

}
