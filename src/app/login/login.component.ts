import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  invalidLogin: boolean;

  constructor(
    private router: Router,
    private authService: SocialAuthService,
    private http: HttpClient
  ) { }

  ngOnInit(): void{

  }

  login(form: NgForm){
    const credentials = {
      'username': form.value.username,
      'password': form.value.password
    }

    this.http.post("http://paymentapi-test.us-east-1.elasticbeanstalk.com/api/auth/login", credentials)
      .subscribe(response => {
        const token = (<any>response).token;
        localStorage.setItem("jwt", token);
        this.router.navigate(["/home"]);
      },err => {
        this.invalidLogin = true;
      })
  }


  signInHandler(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((data) => {
      localStorage.setItem('google_auth', JSON.stringify(data));
      this.router.navigateByUrl('/home').then();
    });
  }

}
