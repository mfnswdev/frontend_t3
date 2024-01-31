import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscarArtigoService } from './buscar-artigo.service';
import { FormsModule } from '@angular/forms';
import { query } from 'express';


@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css', 
})
export class SobreComponent {
  title = 'WikiAPI';
  termos: any;
  resultados: any = [];

  constructor(private busca: BuscarArtigoService) {}

  buscar() {
    this.busca.getArtigos(this.termos).pipe().subscribe(
      (res: any) => {
        this.resultados = res.query.search;
        console.log(res.query.search);
      }
    );
  }

}
