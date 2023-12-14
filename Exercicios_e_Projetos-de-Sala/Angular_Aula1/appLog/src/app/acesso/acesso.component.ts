import { Component } from '@angular/core';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrl: './acesso.component.css'
})
export class AcessoComponent {
  permissao = ['root', 'admin', 'user'];
  login: string = '';
  botaoDesabilitado: boolean = true;
  onLogando() {
    if(this.permissao.includes(this.login)) {
      this.botaoDesabilitado = false;
    } else {
      this.botaoDesabilitado = true;
    }
  }

 onClick() {
   alert("Login efetuado com sucesso");
 }
}
