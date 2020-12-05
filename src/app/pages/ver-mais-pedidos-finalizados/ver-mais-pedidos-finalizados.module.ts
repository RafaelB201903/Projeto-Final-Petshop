import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerMaisPedidosFinalizadosPageRoutingModule } from './ver-mais-pedidos-finalizados-routing.module';

import { VerMaisPedidosFinalizadosPage } from './ver-mais-pedidos-finalizados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerMaisPedidosFinalizadosPageRoutingModule
  ],
  declarations: [VerMaisPedidosFinalizadosPage]
})
export class VerMaisPedidosFinalizadosPageModule {}
