import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BaseChartDirective } from 'ng2-charts';
import { Datapeso } from '../../Models/datapeso';
import { DatabaseService } from '../../Services/database.service';
import { Chart, registerables } from 'chart.js';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PesagemService } from '../../Services/pesagem.service';


@Component({
  selector: 'app-grafico',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, BaseChartDirective, FormsModule],
  templateUrl: './grafico.component.html',
  styleUrl: './grafico.component.scss',

})
export class GraficoComponent implements OnInit {
  pesos: Datapeso[] = []
  arrayPesos: Array<number> = []
  arrayDatas: Array<string> = []
  id: any
  chart!: Chart;

  constructor(private dataBaseService: DatabaseService, private pesagemService: PesagemService, private route: ActivatedRoute) { }
  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');
    this.fetchPesos();

    this.pesagemService.novoPesoAdicionado$.subscribe(() => {
      this.fetchPesos();
    });
    
    
    console.log(this.arrayDatas);
    console.log(this.arrayPesos);
    console.log(this.pesos);
  }

  async renderChart() {
    if (this.chart) {
      await this.chart.destroy();
    }

    this.chart = new Chart("ctx", {
      type: 'bar',
      data: {
        labels: this.arrayDatas,
        datasets: [{
          label: 'Pesagens',
          data: this.arrayPesos,
          borderWidth: 1,
          borderColor: '#cdae73',
          backgroundColor: '#cdae73'
        }, {
          type: 'line',
          label: '',
          data: this.arrayPesos,
          borderColor: '#7b7b7b',
          backgroundColor: '#7b7b7b'
        }]
      },
      options: {
        scales: {
          y: {
            type: 'linear',
            beginAtZero: true
          }
        }
      }
    });
  }

  fetchPesos() {
    this.dataBaseService.getPesagemByID(this.id).subscribe((response) => {
      this.pesos = response;
      this.arrayPesos = [];
      this.arrayDatas = [];

      this.pesos.forEach(element => {
        this.arrayPesos.push(element.peso)
        this.arrayDatas.push(element.dataPesagem)
      });
      this.renderChart();
    });
  }


}

