import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { CadastroPigComponent } from './Pages/cadastro-pig/cadastro-pig.component';
import { ListarAnimaisComponent } from './Pages/listar-animais/listar-animais.component';
import { EditarAnimalComponent } from './Pages/editar-animal/editar-animal.component';
import { CadastraPesoComponent } from './Pages/cadastra-peso/cadastra-peso.component';
import { ListarPesosComponent } from './Pages/listar-pesos/listar-pesos.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'cadastrarAnimal', component: CadastroPigComponent },
    { path: 'listarAnimais', component: ListarAnimaisComponent },
    { path: 'editarAnimal/:id', component: EditarAnimalComponent },
    { path: 'cadastrarPesagem/:id', component: CadastraPesoComponent },
    { path: 'registroPesagem/:id', component: ListarPesosComponent}
    // { path: 'login', component: LoginPageComponent },
    // {path: 'sem-autorizacao', component: SemAutorizacaoComponent},
];
