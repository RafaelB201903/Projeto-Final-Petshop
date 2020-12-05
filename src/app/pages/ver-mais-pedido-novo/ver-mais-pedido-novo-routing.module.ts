import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerMaisPedidoNovoPage } from './ver-mais-pedido-novo.page';

const routes: Routes = [
  {
    path: '',
    component: VerMaisPedidoNovoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerMaisPedidoNovoPageRoutingModule {}
