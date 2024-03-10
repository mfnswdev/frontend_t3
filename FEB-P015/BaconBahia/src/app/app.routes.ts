import { Routes } from '@angular/router';
import { CadastraPesoComponent } from './Pages/cadastra-peso/cadastra-peso.component';
import { CadastroPigComponent } from './Pages/cadastro-pig/cadastro-pig.component';
import { EditarAnimalComponent } from './Pages/editar-animal/editar-animal.component';
import { GraficoComponent } from './Pages/grafico/grafico.component';
import { HomeComponent } from './Pages/home/home.component';
import { ListarAnimaisComponent } from './Pages/listar-animais/listar-animais.component';
import { ListarPesosComponent } from './Pages/listar-pesos/listar-pesos.component';
import { LoginComponent } from './Pages/login/login.component';
import { AuthGuard } from './Guards/auth.guard';
import { EditarPesoComponent } from './Pages/editar-peso/editar-peso.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'cadastrarAnimal', component: CadastroPigComponent, canActivate: [AuthGuard]},
    { path: 'listarAnimais', component: ListarAnimaisComponent, canActivate: [AuthGuard]},
    { path: 'editarAnimal/:id', component: EditarAnimalComponent, canActivate: [AuthGuard]},
    { path: 'cadastrarPesagem/:id', component: CadastraPesoComponent, canActivate: [AuthGuard]},
    { path: 'registroPesagem/:id', component: ListarPesosComponent, canActivate: [AuthGuard]},
    { path: 'grafico/:id', component: GraficoComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent},
    { path: 'editarPeso/:id/:pesagemId',  component: EditarPesoComponent, canActivate: [AuthGuard]},



    // {path: 'sem-autorizacao', component: SemAutorizacaoComponent},
];
