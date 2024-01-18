import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [

  // {
  //   path: '',
  //   component:AppComponent,
  //   children:[

      {
        path: 'login',
        component:LoginComponent
      },
    
      {
        path: 'about',
        component:AboutComponent
      },
    
      {
        path: 'user',
        component:UserComponent
      },
    
      {
        path: 'home',
        component:HomeComponent
      },
    
      {
        path: 'contact',
        component:ContactComponent
      },

      {
        path: 'carousel',
        component:CarouselComponent
      },

      {
        path: 'header',
        component:HeaderComponent
      },

      {
        path: 'auth',
        loadChildren: () => import('./auth/auth-routing.module').then((m) => m.AuthRoutingModule),
      },
    
      {
        path: '',
        component:MainComponent
        // loadComponent: () => import('./main/main.component').then(m => m.MainComponent)
      },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
