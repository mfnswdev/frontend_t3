import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage, RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  private inscricao!: Subscription;
  estaAutenticado = false;

  constructor(private dbAuth: AuthService, private router: Router) { }

  ngDoCheck(): void {
    this.inscricao = this.dbAuth.usuario.subscribe(
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

  logout() {
    this.dbAuth.logout();
    alert("Logout efetuado com sucesso!");
    this.router.navigate(['/']);
  }
}
