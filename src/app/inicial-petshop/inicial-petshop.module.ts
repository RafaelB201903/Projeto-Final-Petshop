import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicialPetshopPageRoutingModule } from './inicial-petshop-routing.module';

import { InicialPetshopPage } from './inicial-petshop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicialPetshopPageRoutingModule
  ],
  declarations: [InicialPetshopPage]
})
export class InicialPetshopPageModule {}
