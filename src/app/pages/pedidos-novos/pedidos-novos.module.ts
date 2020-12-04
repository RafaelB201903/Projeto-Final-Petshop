import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidosNovosPageRoutingModule } from './pedidos-novos-routing.module';

import { PedidosNovosPage } from './pedidos-novos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidosNovosPageRoutingModule
  ],
  declarations: [PedidosNovosPage]
})
export class PedidosNovosPageModule {}
