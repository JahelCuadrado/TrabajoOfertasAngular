import { Loginout } from './../model/loginout';
import { BehaviorSubject, ConnectableObservable, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private LoginBehaviourSubject: BehaviorSubject <Loginout | null>;
  public login: Observable<Loginout | null>;


  constructor( private http: HttpClient) {

    let elementoEnNavegador = <string>localStorage?.getItem('login');
    let elementoSerializado = JSON.parse(elementoEnNavegador);
    this.LoginBehaviourSubject = new BehaviorSubject<Loginout | null>(elementoSerializado);
    this.login = this.LoginBehaviourSubject.asObservable();

  }

  hacerLogin(LoginIn:Login):Observable<Loginout>{
    return this.http.post<Loginout>('http://localhost:8080/api/authenticate', LoginIn)
    .pipe(map( respueestaBack => {

      this.LoginBehaviourSubject.next(respueestaBack);
      let value = JSON.stringify(respueestaBack);
      localStorage.setItem('login', value);
      console.log('Se guardó del token: ' + value);
      return respueestaBack;

    }))
  }

  verUsuarioConectado(): Loginout | null {
    return this.LoginBehaviourSubject?.value;
  }

  Logout():void{
    localStorage.removeItem('login');
    this.LoginBehaviourSubject.next(null);
    //redirigir a login
  }

}
