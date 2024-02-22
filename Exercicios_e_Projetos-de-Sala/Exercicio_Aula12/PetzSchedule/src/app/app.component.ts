import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CadastrarAtendimentoComponent } from "./components/cadastrar-atendimento/cadastrar-atendimento.component";
import { ListaAtendimentoComponent } from "./components/lista-atendimento/lista-atendimento.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, CadastrarAtendimentoComponent, ListaAtendimentoComponent]
})
export class AppComponent {
  title = 'PetzSchedule';
}
