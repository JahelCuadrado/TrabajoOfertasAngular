import { Oferta } from './../model/oferta';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class OfertaService {

  constructor(private http: HttpClient) {}

  obtenerOfertas(): Observable<Array<Oferta>>{
    return this.http.get<Array<Oferta>>('http://localhost:8080/api/ofertas');
  }

}
