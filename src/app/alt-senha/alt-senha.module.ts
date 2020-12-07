import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AltSenhaPageRoutingModule } from './alt-senha-routing.module';

import { AltSenhaPage } from './alt-senha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AltSenhaPageRoutingModule
  ],
  declarations: [AltSenhaPage]
})
export class AltSenhaPageModule {}
