import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerMaisPedidoNovoPageRoutingModule } from './ver-mais-pedido-novo-routing.module';

import { VerMaisPedidoNovoPage } from './ver-mais-pedido-novo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerMaisPedidoNovoPageRoutingModule
  ],
  declarations: [VerMaisPedidoNovoPage]
})
export class VerMaisPedidoNovoPageModule {}
