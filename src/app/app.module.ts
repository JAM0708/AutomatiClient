import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { FaqComponent } from './faq/faq.component';
import { OnlineChatComponent } from './online-chat/online-chat.component';
import { PasswordResetComponent } from './login/password-reset/password-reset.component';
import { RegisterComponent } from './login/register/register.component';
import { UserCarsComponent } from './profile/user-cars/user-cars.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { AddReviewComponent } from './profile/user-cars/add-review/add-review.component';
import { StartUsedComponent } from './landing-page/start-used/start-used.component';
import { ListCarsComponent } from './landing-page/start-used/list-cars/list-cars.component';
import { CarDetailComponent } from './landing-page/start-used/list-cars/car-detail/car-detail.component';
import { CarReviewsComponent } from './landing-page/start-used/list-cars/car-detail/car-reviews/car-reviews.component';
import { BuyCarComponent } from './landing-page/start-used/list-cars/car-detail/buy-car/buy-car.component';
import { PaymentComponent } from './landing-page/start-used/list-cars/car-detail/payment/payment.component';
import { ShippingComponent } from './landing-page/start-used/list-cars/car-detail/shipping/shipping.component';
import { StartNewComponent } from './landing-page/start-new/start-new.component';
import { CustomizationStartComponent } from './landing-page/start-new/customization-start/customization-start.component';
import { CustomizeComponent } from './landing-page/start-new/customization-start/customize/customize.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    ProfileComponent,
    FaqComponent,
    OnlineChatComponent,
    PasswordResetComponent,
    RegisterComponent,
    UserCarsComponent,
    EditProfileComponent,
    AddReviewComponent,
    StartUsedComponent,
    ListCarsComponent,
    CarDetailComponent,
    CarReviewsComponent,
    BuyCarComponent,
    PaymentComponent,
    ShippingComponent,
    StartNewComponent,
    CustomizationStartComponent,
    CustomizeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
