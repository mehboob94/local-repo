import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from "./carousel/carousel.component";


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        AboutComponent,
        UserComponent,
        HomeComponent,
        ContactComponent,
        MainComponent,
        HeaderComponent,
        // CarouselComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        // NgbModule,
        RouterOutlet,
        CarouselComponent,
        
    ]
})
export class AppModule { }
