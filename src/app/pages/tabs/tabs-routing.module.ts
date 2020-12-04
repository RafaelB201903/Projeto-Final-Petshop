import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';


  const routes: Routes = [
    {
      path: '',
      component: TabsPage,
      children: [
        {
            path: 'pedidos-novos',
            children: [
              {
                path: '',
                loadChildren: () => import('../pedidos-novos/pedidos-novos.module').then(m => m.PedidosNovosPageModule)
              }
            ]
        },
        {
          path: 'pedidos-em-andamento',
          children: [
            {
              path: '',
              loadChildren: () => import('../pedidos-em-andamento/pedidos-em-andamento.module').then(m => m.PedidosEmAndamentoPageModule)
            }
          ]
        },
        {
          path: 'pedidos-finalizados',
          children: [
            {
              path: '',
              loadChildren: () => import('../pedidos-finalizados/pedidos-finalizados.module').then(m => m.PedidosFinalizadosPageModule)
            }
          ]
        },
        {
          path: '',
          redirectTo: '/tabs/pedidos-novos/',
          pathMatch: 'full'
        } 
      ]
    },
    {
      path: '',
      redirectTo: '/pedidos-novos',
      pathMatch: 'full'
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
