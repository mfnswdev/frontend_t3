import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ProjectFormComponent } from '../project-form/project-form.component';

@Component({
  selector: 'app-contact-form-page',
  standalone: true,
  imports: [HeaderComponent,FooterComponent, ProjectFormComponent],
  templateUrl: './contact-form-page.component.html',
  styleUrl: './contact-form-page.component.scss'
})
export class ContactFormPageComponent {

}
