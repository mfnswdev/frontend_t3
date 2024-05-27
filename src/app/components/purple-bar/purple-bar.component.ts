import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-purple-bar',
  standalone: true,
  imports: [],
  templateUrl: './purple-bar.component.html',
  styleUrl: './purple-bar.component.scss'
})
export class PurpleBarComponent {
  @Input("text-p") textbarp: string="";
  @Input("text-p2") textbarp2: string="";
  @Input("text-p3") textbarp3: string="";
  @Input("text-h3") textbarh3: string="";
}
