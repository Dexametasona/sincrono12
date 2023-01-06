import { CompSinc12Module } from './comp-sinc12/comp-sinc12.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValidaEstiloDirective } from './directive/valida-estilo.directive';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompSinc12Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
