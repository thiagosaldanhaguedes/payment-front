import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [
  ]
})
export class PaymentDetailsComponent implements OnInit {

  payments: any;

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get("http://localhost:61235/api/PaymentDetail")
      .subscribe(response => {
        this.payments = response;
      }, err => {
        console.log(err);
      })
  }

  signOut(): void{
    localStorage.removeItem('google_auth');
    this.router.navigateByUrl('/login').then;
  }

  toDashboard(): void{
    this.router.navigateByUrl('/dashboard').then;
  }
}
