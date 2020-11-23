import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidosEmAndamentoPageRoutingModule } from './pedidos-em-andamento-routing.module';

import { PedidosEmAndamentoPage } from './pedidos-em-andamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidosEmAndamentoPageRoutingModule
  ],
  declarations: [PedidosEmAndamentoPage]
})
export class PedidosEmAndamentoPageModule {}
