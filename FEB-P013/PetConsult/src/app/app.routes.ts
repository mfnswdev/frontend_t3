import { Routes } from '@angular/router';
import { CadastrarAtendimentoComponent } from './Components/cadastrar-atendimento/cadastrar-atendimento.component';
import { ListaAtendimentosComponent } from './Components/lista-atendimentos/lista-atendimentos.component';
import { EditarAtendimentosComponent } from './Pages/editar-atendimentos/editar-atendimentos.component';
import { HomeComponent } from './Components/home/home.component';

export const routes: Routes = [
    { path: 'cadastrarAtendimento', component: CadastrarAtendimentoComponent },
    { path: 'listarAtendimento', component: ListaAtendimentosComponent },
    { path: 'editarAtendimento/:id', component: EditarAtendimentosComponent },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },

    // { path: 'contato', component: ContatoComponent },
    // { path: 'editarTicket/:id', component: EditarTicketComponent },
    // { path: '', redirectTo: '/principal', pathMatch: 'full' },
];
