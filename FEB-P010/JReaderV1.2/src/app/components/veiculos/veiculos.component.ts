import { Component, OnInit } from '@angular/core';
import { JsonReaderService } from '../../services/json-reader.service';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.scss'],
  standalone: true,
})
export class VeiculosComponent implements OnInit {
  veiculos: any[] = [];

  constructor(private jsonReaderService: JsonReaderService) {}

  ngOnInit(): void {
    this.jsonReaderService.getVeiculos().subscribe((data: any) => {
      this.veiculos = data;
    });
  }
}
