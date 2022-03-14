import { Loginout } from './model/loginout';
import { LoginService } from './servicios/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ LoginService ]
})

export class AppComponent implements OnInit{
  title = 'ejercicio02jahel';

  constructor(private route: Router, private loginService: LoginService){}

  ngOnInit(): void {
  }

  goToLogin() :void{
    this.route.navigate(['/login']);
  }

  goToLogout() :void{
    this.loginService.logout();
  }
}


