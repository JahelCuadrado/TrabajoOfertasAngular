import { LoginService } from './../../servicios/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/model/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formularioLogin: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private loginService: LoginService,
    private route: Router) {
    this.formularioLogin=this.formBuilder.group({
      username:['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: []
    });
  }

  ngOnInit(): void {
  }

  login():void{
    //comprobar si el formulario es válido

    let loginIn: Login = new Login(this.formularioLogin.controls['username'].value,
    this.formularioLogin.controls['password'].value,
    false);

    this.loginService.hacerLogin(loginIn).subscribe(login => {
    console.log('Inicio sesion ' + JSON.stringify(login));
    this.route.navigate(['/home']);
  });


}

}
