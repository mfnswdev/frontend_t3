import { Component } from '@angular/core';
import { FrameworkComponent } from '../framework/framework.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [FrameworkComponent, HeaderComponent, FooterComponent],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})
export class SkillSetComponent {

}
