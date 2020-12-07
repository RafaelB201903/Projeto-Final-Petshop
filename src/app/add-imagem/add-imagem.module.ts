import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddImagemPageRoutingModule } from './add-imagem-routing.module';

import { AddImagemPage } from './add-imagem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddImagemPageRoutingModule
  ],
  declarations: [AddImagemPage]
})
export class AddImagemPageModule {}
