import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BaseChartDirective } from 'ng2-charts';
import { Datapeso } from '../../Models/datapeso';
import { DatabaseService } from '../../Services/database.service';


@Component({
  selector: 'app-grafico',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, BaseChartDirective],
  templateUrl: './grafico.component.html',
  styleUrl: './grafico.component.scss',

})
export class GraficoComponent {
  loadedPesagem: Datapeso[] = [];
  id: any;

  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Pesos durante x anos', backgroundColor: '#8f1e00' },
  ];

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  @ViewChild(BaseChartDirective) chart!: BaseChartDirective;
  constructor(private database: DatabaseService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');
    this.ListarPesagens();
    console.log(this.loadedPesagem)
  }

  updateChart() {
    this.chart.update();
  }

  ListarPesagens() {
    this.database.getPesagemByID(this.id).subscribe((response) => {
      this.loadedPesagem = response;
      console.log(response);
    });

  }
}

