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


const appRoutes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {path: 'home', canActivate: [TokenAuthGuard], component: LandingPageComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'profile',canActivate: [TokenAuthGuard], component: ProfileComponent},
      {path: 'faq', component: FaqComponent},
      {path: 'new', component: StartNewComponent},
      {path: 'used', component: StartUsedComponent},
      {path: 'editProfile', component: EditProfileComponent}
    ];



    @NgModule({
        imports: [RouterModule.forRoot(appRoutes)],
        exports: [RouterModule]
    })
    export class AppRoutingModule {
    
    }