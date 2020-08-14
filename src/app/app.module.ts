import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SobreProjetoComponent } from './sobre-projeto/sobre-projeto.component';
import { ContatoComponent } from './contato/contato.component';
import { TrocasComponent } from './trocas/trocas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SobreProjetoComponent,
    ContatoComponent,
    TrocasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
