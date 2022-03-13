import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"about",
  component:AboutComponent,
  children:[
    {path:"aboutme",component:AboutMeComponent},
    {path:"aboutcompany",component:AboutCompanyComponent}
  ]
  },
  {path:"user-login",component:UserLoginComponent},
  {path:"user-register",component:UserRegisterComponent},

  {path:"about/:id",component:AboutComponent},
  {path:"user-login/:id",component:UserLoginComponent},
  {path:"user-register/:id",component:UserRegisterComponent},

  {path:"**",component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }