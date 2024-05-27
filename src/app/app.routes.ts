import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactFormPageComponent } from './components/contact-form-page/contact-form-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SkillSetComponent } from './components/skill-set/skill-set.component';

export const routes: Routes = [
    { path: "", component: HomeComponent},
    { path: "contact", component: ContactFormPageComponent},
    { path: "about-us", component: AboutUsComponent},
    { path: "skill-set", component: SkillSetComponent}
];
