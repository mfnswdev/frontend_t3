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

  barChartLabels: string[] = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    { data: [0], label: 'Pesos durante x anos', backgroundColor: '#8f1e00' },
  ];

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  @ViewChild(BaseChartDirective) chart!: BaseChartDirective;
  constructor(private database: DatabaseService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.ListarPesagens();
    // this.barChartData[0].data = [];

    // this.loadedPesagem.forEach((peso: Datapeso) => {
    //   this.barChartLabels.push(peso.dataPesagem);
    //   this.barChartData[0].data.push(peso.peso);

    //   console.log("peso: " + peso.peso);
    //   console.log("data: " + peso.dataPesagem + "\n\n");

    // });
  }

  // ngOnInit(): void {

  //   this.id = this.route.snapshot.paramMap.get('id');
  //   this.ListarPesagens();
  //   this.barChartData[0].data = [];

  //   this.loadedPesagem.forEach((peso: Datapeso) => {
  //     this.barChartLabels.push(peso.dataPesagem);
  //     this.barChartData[0].data.push(peso.peso);

  //     console.log("peso: " + peso.peso);
  //     console.log("data: " + peso.dataPesagem + "\n\n");

  //   });
  // }

  updateChart() {
    this.chart.update();
  }

  ListarPesagens() {
    this.database.getPesagemByID(this.id).subscribe((response) => {
      this.loadedPesagem = response;
      this.barChartData[0].data = [];

      this.loadedPesagem.forEach((peso: Datapeso) => {
        this.barChartLabels.push(peso.dataPesagem);
        this.barChartData[0].data.push(peso.peso);

        console.log("peso: " + peso.peso);
        console.log("data: " + peso.dataPesagem + "\n\n");

      });
      console.log(response);
    });

  }
}

