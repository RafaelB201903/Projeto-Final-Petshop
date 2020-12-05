import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerMaisPedidoEmAndamentoPageRoutingModule } from './ver-mais-pedido-em-andamento-routing.module';

import { VerMaisPedidoEmAndamentoPage } from './ver-mais-pedido-em-andamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerMaisPedidoEmAndamentoPageRoutingModule
  ],
  declarations: [VerMaisPedidoEmAndamentoPage]
})
export class VerMaisPedidoEmAndamentoPageModule {}
