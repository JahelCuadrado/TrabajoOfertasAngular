import { OfertaService } from './../../servicios/oferta.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Oferta } from 'src/app/model/oferta';
import { Location } from '@angular/common';



@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertaService]
})
export class OfertaComponent implements OnInit {

  public sub: any;
  public oferta = new Oferta();

  constructor(
      private route: ActivatedRoute,
      private ofertaService: OfertaService,
      private location: Location
  ) { }

  ngOnInit(): void {
      this.sub = this.route.paramMap.subscribe((parms: ParamMap) => {
          this.ofertaService.getOferta(parms.get('id')).subscribe(
              response => {this.oferta = response;},
              error => {console.log('Error ' + JSON.stringify(error));
              }
          )
      });
  }

  public goBack(): void{
    this.location.back();
}

}
