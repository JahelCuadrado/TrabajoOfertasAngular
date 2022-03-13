import { Oferta } from './../../model/oferta';
import { Loginout } from './../../model/loginout';
import { LoginService } from './../../servicios/login.service';
import { OfertaService } from './../../servicios/oferta.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public hayUsuario: boolean;
  public ofertas: Array<Oferta> = [];

  constructor(private ofertaService: OfertaService, private loginService: LoginService, private router: Router) {
    this.recuperarOfertas();
    this.hayUsuario=false;
    this.loginService.login.subscribe(loginRecibido=>{
      console.log('login recibido ' + JSON.stringify(loginRecibido));
      let hayUsuario1=loginRecibido!==null;
      console.log('hayUsuario = ' + hayUsuario1);
      this.hayUsuario = hayUsuario1;
    });


  }

  ngOnInit(): void {
  }

  recuperarOfertas():void{
    this.ofertaService.obtenerOfertas().subscribe( respuesta => {
      this.ofertas = respuesta;
      console.log('Ofertas recuperadas ==>' + JSON.stringify(this.ofertas));
    });
  }

  verOferta(id:any):void{
    this.router.navigate(['/oferta', id]);
  }



}
