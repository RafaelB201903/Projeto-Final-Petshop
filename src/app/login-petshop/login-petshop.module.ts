import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPetshopPageRoutingModule } from './login-petshop-routing.module';

import { LoginPetshopPage } from './login-petshop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPetshopPageRoutingModule
  ],
  declarations: [LoginPetshopPage]
})
export class LoginPetshopPageModule {}
