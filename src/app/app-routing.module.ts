import { CarDetailComponent } from './landing-page/start-used/list-cars/car-detail/car-detail.component';
import { ListCarsComponent } from './landing-page/start-used/list-cars/list-cars.component';
import { TokenAuthGuard } from './token-auth.guard';
import { FaqComponent } from './faq/faq.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NgModule } from "@angular/core";
import { LandingPageComponent } from './landing-page/landing-page.component';
import { StartNewComponent } from './landing-page/start-new/start-new.component';
import { StartUsedComponent } from './landing-page/start-used/start-used.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { BuyCarComponent } from './landing-page/start-used/list-cars/car-detail/buy-car/buy-car.component';
import { CustomizeComponent } from './landing-page/start-new/customize/customize.component';
import { CheckoutComponent } from './landing-page/start-new/customize/checkout/checkout.component';
import { AddReviewComponent } from './profile/add-review/add-review.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { PasswordResetComponent } from './login/forgot-password/password-reset/password-reset.component';
import { PaymentComponent } from './payment/payment.component';
import { ShippingComponent } from './shipping/shipping.component';
import { PayComponent } from './payment/pay/pay.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'home', component: LandingPageComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'profile',canActivate: [TokenAuthGuard], component: ProfileComponent},
      {path: 'faq', component: FaqComponent},
      {path: 'new', component: StartNewComponent},
      {path: 'used', component: StartUsedComponent},
      {path: 'listOfModels', component: ListCarsComponent , canActivate: [TokenAuthGuard]},
      {path: 'carDetails', component: CarDetailComponent , canActivate: [TokenAuthGuard]},
      {path: 'editProfile', component: EditProfileComponent},
      {path: 'payment', component: PaymentComponent , canActivate: [TokenAuthGuard]} ,
      {path: 'shipping', component: ShippingComponent, canActivate: [TokenAuthGuard]},
      {path: 'buyCar', component: BuyCarComponent, canActivate: [TokenAuthGuard]},
      {path: 'customize', component: CustomizeComponent, canActivate: [TokenAuthGuard]},
      {path: 'checkout', component: CheckoutComponent,  canActivate: [TokenAuthGuard]},
      {path: 'addReview', component: AddReviewComponent},
      {path: 'forgotPassword', component: ForgotPasswordComponent},
      {path: 'passwordReset', component: PasswordResetComponent},
      {path: 'payBalance', component: PayComponent}
    ];



    @NgModule({
        imports: [RouterModule.forRoot(appRoutes)],
        exports: [RouterModule]
    })
    export class AppRoutingModule {
    
    }