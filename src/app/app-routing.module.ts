import { FaqComponent } from './faq/faq.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NgModule } from "@angular/core";
import { LandingPageComponent } from './landing-page/landing-page.component';
import { StartNewComponent } from './landing-page/start-new/start-new.component';
import { StartUsedComponent } from './landing-page/start-used/start-used.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'home', component: LandingPageComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'faq', component: FaqComponent},
      {path: 'new', component: StartNewComponent},
      {path: 'used', component: StartUsedComponent}
    ];



    @NgModule({
        imports: [RouterModule.forRoot(appRoutes)],
        exports: [RouterModule]
    })
    export class AppRoutingModule {
    
    }