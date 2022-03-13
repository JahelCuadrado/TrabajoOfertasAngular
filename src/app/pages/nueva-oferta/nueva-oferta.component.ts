import { LoginService } from './../../servicios/login.service';
import { OfertaService } from './../../servicios/oferta.service';
import { Oferta } from 'src/app/model/oferta';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nueva-oferta',
  templateUrl: './nueva-oferta.component.html',
  styleUrls: ['./nueva-oferta.component.css'],
  providers: [ LoginService ]
})
export class NuevaOfertaComponent implements OnInit {

  public oferta: Oferta = new Oferta();
  public formOferta: FormGroup;

  constructor(
      private ofertaService: OfertaService,
      private router: Router,
      private fb: FormBuilder
  ) {
      this.formOferta = this.fb.group({
          titulo: ['', [Validators.required]],
          email: ['', [Validators.required], Validators.email],
          salario: ['', [Validators.required]],
          empresa: ['', [Validators.required]],
          descripcion: ['', [Validators.required]],
          ciudad: ['', [Validators.required]],
      });
   }

  ngOnInit(): void { }

  public onCreate(): void {
      this.ofertaService.crearOferta(this.oferta).subscribe(
          response => {
              this.goToOfertas();
          },
          error => {
              console.log('Error ' + JSON.stringify(error));
          }
      );
  }

  public goToOfertas(): void{
      this.router.navigate(['/home/ofertas']);
  }

  public volver(): void{
    this.router.navigate(['/home']);
  }

}
