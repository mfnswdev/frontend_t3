import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ClassesComponent } from './classes/classes.component';
import { ObjetosComponent } from './objetos/objetos.component';
import { PropriedadesComponent } from './propriedades/propriedades.component';
import { AtributosComponent } from './atributos/atributos.component';
import { GeradorListasComponent } from './gerador-listas/gerador-listas.component';

@NgModule({
  declarations: [
    AppComponent,
    CarrinhoComponent,
    ClassesComponent,
    ObjetosComponent,
    PropriedadesComponent,
    AtributosComponent,
    GeradorListasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
