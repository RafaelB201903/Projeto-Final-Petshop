import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login-petshop',
    pathMatch: 'full'
  },
  
  {
    path: 'login-petshop',
    loadChildren: () => import('./login-petshop/login-petshop.module').then( m => m.LoginPetshopPageModule)
  },
  {
    path: 'home-petshop',
    loadChildren: () => import('./home-petshop/home-petshop.module').then( m => m.HomePetshopPageModule)
  },
  {
    path: 'pedidos-novos',
    loadChildren: () => import('./pedidos-novos/pedidos-novos.module').then( m => m.PedidosNovosPageModule)
  },
  {
    path: 'pedidos-em-andamento',
    loadChildren: () => import('./pedidos-em-andamento/pedidos-em-andamento.module').then( m => m.PedidosEmAndamentoPageModule)
  },
  {
    path: 'pedidos-finalizados',
    loadChildren: () => import('./pedidos-finalizados/pedidos-finalizados.module').then( m => m.PedidosFinalizadosPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
