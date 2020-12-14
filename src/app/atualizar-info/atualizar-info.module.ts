import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtualizarInfoPageRoutingModule } from './atualizar-info-routing.module';

import { AtualizarInfoPage } from './atualizar-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AtualizarInfoPageRoutingModule
  ],
  declarations: [AtualizarInfoPage]
})
export class AtualizarInfoPageModule {}
