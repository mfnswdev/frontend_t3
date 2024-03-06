import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { CadastroPigComponent } from './Pages/cadastro-pig/cadastro-pig.component';
import { ListarAnimaisComponent } from './Pages/listar-animais/listar-animais.component';
import { EditarAnimalComponent } from './Pages/editar-animal/editar-animal.component';

export const routes: Routes = [
    { path: 'cadastrarAnimal', component: CadastroPigComponent },
    { path: 'listarAnimais', component: ListarAnimaisComponent },
    { path: 'editarAnimal/:id', component: EditarAnimalComponent },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    // { path: 'login', component: LoginPageComponent },
    // {path: 'sem-autorizacao', component: SemAutorizacaoComponent},
];
