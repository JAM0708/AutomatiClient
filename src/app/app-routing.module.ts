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
import { PaymentComponent } from './landing-page/start-used/list-cars/car-detail/payment/payment.component';
import { ShippingComponent } from './landing-page/start-used/list-cars/car-detail/shipping/shipping.component';
import { BuyCarComponent } from './landing-page/start-used/list-cars/car-detail/buy-car/buy-car.component';
import { CustomizeComponent } from './landing-page/start-new/customize/customize.component';
import { CheckoutComponent } from './landing-page/start-new/customize/checkout/checkout.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {path: 'home', canActivate: [TokenAuthGuard], component: LandingPageComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'profile',canActivate: [TokenAuthGuard], component: ProfileComponent},
      {path: 'faq', component: FaqComponent},
      {path: 'new', component: StartNewComponent},
      {path: 'used', component: StartUsedComponent},
      {path: 'listOfModels', component: ListCarsComponent},
      {path: 'carDetails', component: CarDetailComponent},
      {path: 'editProfile', component: EditProfileComponent},
      {path: 'payment', component: PaymentComponent},
      {path: 'shipping', component: ShippingComponent},
      {path: 'buyCar', component: BuyCarComponent, canActivate: [TokenAuthGuard]},
      {path: 'customize', component: CustomizeComponent},
      {path: 'checkout', component: CheckoutComponent}
    ];



    @NgModule({
        imports: [RouterModule.forRoot(appRoutes)],
        exports: [RouterModule]
    })
    export class AppRoutingModule {
    
    }