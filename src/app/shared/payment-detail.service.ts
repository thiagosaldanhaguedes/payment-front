import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http:HttpClient) { }

  formData:PaymentDetail = new PaymentDetail();
  readonly baseURL = 'Testapidotnet-env.eba-gjyppxdh.sa-east-1.elasticbeanstalk.com/api/PaymentDetails1'

  postPaymentDetail(){
    return this.http.post(this.baseURL,this.formData);
  }
}
