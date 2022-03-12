import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { OfertaComponent } from './oferta/oferta.component';
import { LoginComponent } from './login/login.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { NuevaOfertaComponent } from './nueva-oferta/nueva-oferta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    OfertaComponent,
    LoginComponent,
    OfertasComponent,
    NuevaOfertaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
