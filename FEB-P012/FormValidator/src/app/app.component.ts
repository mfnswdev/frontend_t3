import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormValidatorComponent } from './components/form-validator/form-validator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormValidatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FormValidator';
}
