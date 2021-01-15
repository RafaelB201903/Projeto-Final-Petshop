import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddImagemPageRoutingModule } from './add-imagem-routing.module';

import { AddImagemPage } from './add-imagem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddImagemPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddImagemPage]
})
export class AddImagemPageModule {}
