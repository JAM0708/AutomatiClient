import { TokenAuthGuard } from './token-auth.guard';
import { JwtHelper } from 'angular2-jwt';
import { TokenService } from './services/token.service';
import { UtilsService } from './services/utils.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { FaqComponent } from './faq/faq.component';
import { OnlineChatComponent } from './online-chat/online-chat.component';
import { UserCarsComponent } from './profile/user-cars/user-cars.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { StartUsedComponent } from './landing-page/start-used/start-used.component';
import { ListCarsComponent } from './landing-page/start-used/list-cars/list-cars.component';
import { CarDetailComponent } from './landing-page/start-used/list-cars/car-detail/car-detail.component';
import { CarReviewsComponent } from './landing-page/start-used/list-cars/car-detail/car-reviews/car-reviews.component';
import { BuyCarComponent } from './landing-page/start-used/list-cars/car-detail/buy-car/buy-car.component';
import { StartNewComponent } from './landing-page/start-new/start-new.component';

import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms"; 
import { HttpModule, JsonpModule } from "@angular/http";
import { CarService } from './services/car.service';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import	{MdDialogModule} from '@angular/material';
import { PaymentService } from './services/payment.service';
import { FaqService } from './services/faq.service';
import { PersonService } from './services/person.service';
import { CustomizeComponent } from './landing-page/start-new/customize/customize.component';
import { CheckoutComponent } from './landing-page/start-new/customize/checkout/checkout.component';
import { ReviewService } from './services/review.service';
import { AddReviewComponent } from './profile/add-review/add-review.component';
import {CookieService} from 'ngx-cookie-service';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { PasswordResetComponent } from './login/forgot-password/password-reset/password-reset.component';
import { PaymentComponent } from './payment/payment.component';
import { ShippingComponent } from './shipping/shipping.component';
import { PayComponent } from './payment/pay/pay.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    ProfileComponent,
    FaqComponent,
    OnlineChatComponent,
    PasswordResetComponent,
    UserCarsComponent,
    EditProfileComponent,
    StartUsedComponent,
    ListCarsComponent,
    CarDetailComponent,
    CarReviewsComponent,
    BuyCarComponent,
    PaymentComponent,
    ShippingComponent,
    StartNewComponent,
    RegisterComponent,
    HeaderComponent,
    ConfirmDialogComponent,
    CustomizeComponent,
    CheckoutComponent,
    AddReviewComponent,
    ForgotPasswordComponent,
    PayComponent,
  ],
  entryComponents: [
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    BrowserAnimationsModule,
    MdDialogModule
  ],
  providers: [CookieService, PersonService, UtilsService, CarService, MdDialogModule, ReviewService, TokenService, JwtHelper, TokenAuthGuard, PaymentService, FaqService],
  bootstrap: [AppComponent]
})
export class AppModule { }
