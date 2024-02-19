import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VeiculosComponent } from './components/veiculos/veiculos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VeiculosComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'JReaderV1.2';
}
