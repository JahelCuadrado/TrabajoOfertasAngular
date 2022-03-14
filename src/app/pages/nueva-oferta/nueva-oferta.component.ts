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
  public formularioValido:boolean=false;

  constructor(
      private ofertaService: OfertaService,
      private router: Router,
      private formBuilder: FormBuilder
  ) {
      this.formOferta = this.formBuilder.group({
          titulo: ['', [Validators.required],[Validators.maxLength(100)]],
          email: ['', [Validators.required],[Validators.maxLength(50)]],
          salario: ['', [Validators.required]],
          empresa: ['', [Validators.required],[Validators.maxLength(50)]],
          descripcion: ['', [Validators.required],[Validators.maxLength(300)]],
          ciudad: ['', [Validators.required],[Validators.maxLength(50)]],
      });
   }

  ngOnInit(): void { }

  public crearOferta(): void {
    this.formularioValido=false;
   // if(this.formOferta.valid){
      this.ofertaService.crearOferta(this.oferta).subscribe(
          response => {
              this.goToHome();
          },
          error => {
              console.log('Error ' + JSON.stringify(error));
          }
      );
       // }else{
        //  this.formularioValido=true;
       // }
  }

  public goToHome(): void{
      this.router.navigate(['/home']);
  }

  public volver(): void{
    this.router.navigate(['/home']);
  }



}
