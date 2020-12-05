import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerMaisPedidosFinalizadosPage } from './ver-mais-pedidos-finalizados.page';

const routes: Routes = [
  {
    path: '',
    component: VerMaisPedidosFinalizadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerMaisPedidosFinalizadosPageRoutingModule {}
