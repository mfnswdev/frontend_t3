import { Component, EventEmitter, Output } from '@angular/core';

interface Veiculo {
  Name: string;
}

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent {
  @Output() selecionarCategoria = new EventEmitter<string>();
  @Output() selecionarVeiculos = new EventEmitter<Veiculo[]>();
  jsonData: any;

  onFileSelected(event: any) {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.jsonData = JSON.parse(e.target.result);
      };

      reader.readAsText(selectedFile);
    }
  }

  emitirCategoria(categoria: string) {
    this.selecionarCategoria.emit(categoria);
    this.emitirVeiculos(categoria);
  }

  emitirVeiculos(categoria: string) {
    const veiculos: Veiculo[] = this.jsonData[categoria] || [];
    this.selecionarVeiculos.emit(veiculos);
  }
}
