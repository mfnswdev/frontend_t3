import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { NewsletterFormComponent } from '../newsletter-form/newsletter-form.component';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-join-us',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, NewsletterFormComponent, BtnPrimaryComponent, NgOptimizedImage],
  templateUrl: './join-us.component.html',
  styleUrl: './join-us.component.scss'
})
export class JoinUsComponent {

}
