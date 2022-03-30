import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [
  ]
})
export class PaymentDetailsComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signOut(): void{
    localStorage.removeItem('google_auth');
    this.router.navigateByUrl('/login').then;
  }

  toDashboard(): void{
    this.router.navigateByUrl('/dashboard').then;
  }
}
