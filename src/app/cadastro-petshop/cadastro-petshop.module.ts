import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroPetshopPageRoutingModule } from './cadastro-petshop-routing.module';

import { CadastroPetshopPage } from './cadastro-petshop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroPetshopPageRoutingModule
  ],
  declarations: [CadastroPetshopPage]
})
export class CadastroPetshopPageModule {}
