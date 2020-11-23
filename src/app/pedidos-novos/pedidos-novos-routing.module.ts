import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidosNovosPage } from './pedidos-novos.page';

const routes: Routes = [
  {
    path: '',
    component: PedidosNovosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidosNovosPageRoutingModule {}
