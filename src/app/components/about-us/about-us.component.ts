import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { NewsletterFormComponent } from '../newsletter-form/newsletter-form.component';
import { BenefitComponent } from '../benefit/benefit.component';
import { NgOptimizedImage } from '@angular/common';
import { PurpleBarComponent } from '../purple-bar/purple-bar.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, BtnPrimaryComponent, NewsletterFormComponent, BenefitComponent, NgOptimizedImage, PurpleBarComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}
