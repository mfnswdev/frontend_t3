import { AfterViewChecked, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements DoCheck, OnDestroy {
  private inscricao!: Subscription;
  estaAutenticado = false;
  
  constructor(private authService : AuthService, private router : Router){}
  ngDoCheck(): void {
    this.inscricao = this.authService.usuario.subscribe(
      usuario => {
        this.estaAutenticado = !!usuario.token;
      }
    );
  }

  ngOnDestroy(): void {
    // Certifique-se de cancelar a inscrição para evitar vazamentos de memória
    if (this.inscricao) {
      this.inscricao.unsubscribe();
    }
  }

  logout(){
    this.authService.logout();
    alert("Logout efetuado com sucesso!");
    this.router.navigate(['/']);
  }
 
    
  }

  
