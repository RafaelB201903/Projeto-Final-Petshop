import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerMaisPedidoEmAndamentoPage } from './ver-mais-pedido-em-andamento.page';

const routes: Routes = [
  {
    path: '',
    component: VerMaisPedidoEmAndamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerMaisPedidoEmAndamentoPageRoutingModule {}
