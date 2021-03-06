import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent{


  constructor(private router: Router, private jwtHelper: JwtHelperService) { }

  isUserAuthenticated(){
    const token = localStorage.getItem("jwt");
    if(token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    else {
      return false;
    }
  }

  logOut(){
    localStorage.removeItem("jwt");
    this.router.navigate(["/login"]);
  }

}
