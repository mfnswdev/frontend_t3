import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-propriedades',
  templateUrl: './propriedades.component.html',
  styleUrls: ['./propriedades.component.css']
})
export class PropriedadesComponent {
  @Input() veiculos: any[] = [];
  @Input() itensVeiculoSelecionado: any;
  @Input() veiculoSelecionado: any;
  @Output() selecionarTitulo = new EventEmitter<string>();

  emitirTituloSelecionado(titulo: string) {
    this.selecionarTitulo.emit(titulo);
  }

  getNomesVeiculos(): string[] {
    if (this.veiculoSelecionado) {
      return Object.keys(this.veiculoSelecionado);
    } else {
      return [];
    }
  }
}
