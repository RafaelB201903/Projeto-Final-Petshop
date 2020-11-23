import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePetshopPageRoutingModule } from './home-petshop-routing.module';

import { HomePetshopPage } from './home-petshop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePetshopPageRoutingModule
  ],
  declarations: [HomePetshopPage]
})
export class HomePetshopPageModule {}
