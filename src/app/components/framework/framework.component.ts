import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'framework',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './framework.component.html',
  styleUrl: './framework.component.scss'
})
export class FrameworkComponent {
@Input("titulo") cardTitle: string = "Título";
@Input("descricao") cardDescription: string = "Descrição";
@Input("imagem") imgPath: string = "https://via.placeholder.com/150";
}
