import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SairPetshopPageRoutingModule } from './sair-petshop-routing.module';

import { SairPetshopPage } from './sair-petshop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SairPetshopPageRoutingModule
  ],
  declarations: [SairPetshopPage]
})
export class SairPetshopPageModule {}
