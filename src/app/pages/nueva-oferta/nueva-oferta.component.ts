import { LoginService } from './../../servicios/login.service';
import { OfertaService } from './../../servicios/oferta.service';
import { Oferta } from 'src/app/model/oferta';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nueva-oferta',
  templateUrl: './nueva-oferta.component.html',
  styleUrls: ['./nueva-oferta.component.css'],
  providers: [LoginService],
})
export class NuevaOfertaComponent implements OnInit {
  public oferta: Oferta = new Oferta();
  public formularioValido: boolean = false;
  public ofertaModel: Oferta;
  public validateTitulo: boolean;
  public validateEmpresa: boolean;
  public validateDescripcion: boolean;
  public validateCiudad: boolean;
  public validateEmail: boolean;
  public longitudCiudad: number;

  constructor(private ofertaService: OfertaService, private router: Router) {
    this.ofertaModel = new Oferta();
    this.validateTitulo = false;
    this.validateEmpresa = false;
    this.validateDescripcion = false;
    this.validateCiudad = false;
    this.validateEmail = false;
    this.longitudCiudad = 0;
  }

  ngOnInit(): void {}

  public crearOferta(): void {
    this.ofertaService.crearOferta(this.oferta).subscribe(
      (response) => {
        this.volver();
      },
      (error) => {
        console.log('Error ' + JSON.stringify(error));
      }
    );
  }

  onSubmit(f: NgForm) {
    this.validaciones(f);

    this.longitudCiudad = f.value.ciudad.length;

    if (
      this.validateTitulo === false &&
      this.validateEmpresa === false &&
      this.validateDescripcion === false &&
      this.validateCiudad === false &&
      this.validateEmail === false
    ) {
      this.oferta.titulo = f.value.titulo;
      this.oferta.descripcion = f.value.descripcion;
      this.oferta.empresa = f.value.empresa;
      this.oferta.ciudad = f.value.ciudad;
      this.oferta.email = f.value.email;
      this.crearOferta();
    }
  }

  public validaciones(f: NgForm): void {
    if (f.value.titulo.length > 100 || f.value.titulo.length < 5) {
      this.validateTitulo = true;
    } else {
      this.validateTitulo = false;
    }
    if (f.value.empresa.length > 50 || f.value.empresa.length < 5) {
      this.validateEmpresa = true;
    } else {
      this.validateEmpresa = false;
    }
    if (f.value.descripcion.length > 300 || f.value.descripcion.length < 5) {
      this.validateDescripcion = true;
    } else {
      this.validateDescripcion = false;
    }
    if (f.value.ciudad.length > 50 || f.value.ciudad.length < 5) {
      this.validateCiudad = true;
    } else {
      this.validateCiudad = false;
    }
    if (f.value.email.length > 50 || f.value.email.length < 5) {
      this.validateEmail = true;
    } else {
      this.validateEmail = false;
    }
  }

  public volver(): void {
    this.router.navigate(['/home']);
  }
}
