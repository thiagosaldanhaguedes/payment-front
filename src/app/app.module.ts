import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { GoogleLoginProvider, SocialAuthService, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentDetailFormComponent } from './payment-details/payment-detail-form/payment-detail-form.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './auth-guard/auth-guard.service';

export function tokenGetter(){
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    PaymentDetailsComponent,
    PaymentDetailFormComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:61235"],       
        disallowedRoutes: []
      },
    })
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('740627097632-te35vtqjqviif44ef0mdldpo0j964j1c.apps.googleusercontent.com') ////740627097632-65d9qjrpq28r7s5emghjr99arvv8js11.apps.googleusercontent.com
          }
        ]
      } as SocialAuthServiceConfig
    },
    [AuthGuard]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
