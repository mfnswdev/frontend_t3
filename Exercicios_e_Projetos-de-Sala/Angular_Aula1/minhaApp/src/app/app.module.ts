import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AraraComponent } from './arara/arara.component';
import { LeaoComponent } from './leao/leao.component';
import { PredadorComponent } from './predador/predador.component';

@NgModule({
  declarations: [
    AppComponent,
    AraraComponent,
    LeaoComponent,
    PredadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
