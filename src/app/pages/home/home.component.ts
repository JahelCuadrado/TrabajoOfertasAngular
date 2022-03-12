import { OfertaService } from './../../servicios/oferta.service';
import { Component, OnInit } from '@angular/core';
import { Oferta } from 'src/app/model/oferta';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public ofertas: Array<Oferta> = [];

  constructor(private ofertaService: OfertaService) { }


  ngOnInit(): void {
    this.recuperarOfertas();
  }


  recuperarOfertas():void{
    this.ofertaService.obtenerOfertas().subscribe( respuesta => {
      this.ofertas = respuesta;
      console.log('Ofertas recuperadas ==>' + JSON.stringify(this.ofertas));
    });

  }

}
