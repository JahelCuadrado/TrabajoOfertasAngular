import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { OfertaComponent } from './oferta/oferta.component';
import { LoginComponent } from './login/login.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { NuevaOfertaComponent } from './nueva-oferta/nueva-oferta.component';



@NgModule({
  declarations: [
    HomeComponent,
    OfertaComponent,
    LoginComponent,
    OfertasComponent,
    NuevaOfertaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
