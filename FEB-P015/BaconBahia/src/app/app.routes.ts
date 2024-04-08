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
import { ListarSessoesComponent } from './Pages/listar-sessoes/listar-sessoes.component';
import { CadastroSessaoComponent } from './Pages/cadastro-sessao/cadastro-sessao.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'cadastrarAnimal', component: CadastroPigComponent, canActivate: [AuthGuard] },
    { path: 'listarAnimais', component: ListarAnimaisComponent, canActivate: [AuthGuard], },
    { path: 'editarAnimal/:id', loadComponent: () => import('./Pages/editar-animal/editar-animal.component').then(m => m.EditarAnimalComponent), canActivate: [AuthGuard] },
    { path: 'cadastrarPesagem/:id', loadComponent: () => import('./Pages/cadastra-peso/cadastra-peso.component').then(m => m.CadastraPesoComponent), canActivate: [AuthGuard]},
    { path: 'registroPesagem/:id', loadComponent: () => import('./Pages/listar-pesos/listar-pesos.component').then(m => m.ListarPesosComponent), canActivate: [AuthGuard]},
    { path: 'grafico/:id', loadComponent: () => import('./Pages/grafico/grafico.component').then(m => m.GraficoComponent), canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'editarPeso/:id/:pesagemId',loadComponent: () => import('./Pages/editar-peso/editar-peso.component').then(m => m.EditarPesoComponent), canActivate: [AuthGuard]},
    { path: 'listarSessoes', component: ListarSessoesComponent },
    { path: 'cadastrarSessao', component: CadastroSessaoComponent }



    // {path: 'sem-autorizacao', component: SemAutorizacaoComponent},
];
