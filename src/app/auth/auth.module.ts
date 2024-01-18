import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ServersComponent } from './servers/servers.component';


@NgModule({
  declarations: [
    ServersComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AuthModule
  ],

exports:[
  ServersComponent
]

})
export class AuthModule { }
