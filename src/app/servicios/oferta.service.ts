import { Oferta } from './../model/oferta';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { AppEndPoints } from '../endpoints.component';

let token = JSON.parse(<string>localStorage?.getItem('login') || '{}')['id_token'];
const cabecera = {headers: new HttpHeaders(
    {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`})};

@Injectable({
  providedIn: 'root'
})
export class OfertaService {
  constructor(private http: HttpClient) {}

  obtenerOfertas(): Observable<Array<Oferta>>{
    return this.http.get<Array<Oferta>>('http://localhost:8080/api/ofertas');
  }

    getListadoOfertas(): Observable<any> {
        let url = AppEndPoints.ENDPOINTSLISTAS;
        return this.http.get(url, cabecera);
    }

    getOferta(id: string | null): Observable<any> {
        let url = AppEndPoints.ENDPOINTSOFERTA;
        return this.http.get(url + id, cabecera);
    }

    crearOferta(oferta: Oferta): Observable<any> {
        let url = AppEndPoints.ENDPOINTSLISTAS;
        return this.http.post<any>(url, oferta, cabecera);
    }

    public eliminarOferta(id: string | null): Observable<any> {
        let url = AppEndPoints.ENDPOINTSOFERTA;
        return this.http.delete<any>(url + id, cabecera);
    }

}
