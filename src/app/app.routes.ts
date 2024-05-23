import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactFormPageComponent } from './components/contact-form-page/contact-form-page.component';

export const routes: Routes = [
    { path: "", component: HomeComponent},
    { path: "contact", component: ContactFormPageComponent},
];
