import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidosEmAndamentoPage } from './pedidos-em-andamento.page';

const routes: Routes = [
  {
    path: '',
    component: PedidosEmAndamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidosEmAndamentoPageRoutingModule {}
