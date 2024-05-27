import { Component, Input, input, signal } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewsletterService } from '../../services/newsletter.service';

@Component({
  selector: 'newsletter-form',
  standalone: true,
  imports: [BtnPrimaryComponent, ReactiveFormsModule],
  providers: [NewsletterService],
  templateUrl: './newsletter-form.component.html',
  styleUrl: './newsletter-form.component.scss'
})
export class NewsletterFormComponent {
  newsletterFrom!: FormGroup;
  loading = signal(false);
  @Input("texto") text: string = "";
  @Input("paragrafo") paragrafo: string = "";

  constructor(private service: NewsletterService) {
    this.newsletterFrom = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    this.loading.set(true);
    if (this.newsletterFrom.valid) {
      this.service.sendData(this.newsletterFrom.value.name, this.newsletterFrom.value.email).subscribe({
        next: () => {
          this.newsletterFrom.reset();
          this.loading.set(false);
          alert('Thank you for subscribing to our newsletter!');
        }
      });
    }
  }

}
