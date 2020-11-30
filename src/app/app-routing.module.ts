import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicial-petshop',
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
  {
    path: 'cadastro-petshop',
    loadChildren: () => import('./cadastro-petshop/cadastro-petshop.module').then( m => m.CadastroPetshopPageModule)
  },
  {
    path: 'inicial-petshop',
    loadChildren: () => import('./inicial-petshop/inicial-petshop.module').then( m => m.InicialPetshopPageModule)
  },
  {
    path: 'configuracao',
    loadChildren: () => import('./configuracao/configuracao.module').then( m => m.ConfiguracaoPageModule)
  },
  {
    path: 'sair-petshop',
    loadChildren: () => import('./sair-petshop/sair-petshop.module').then( m => m.SairPetshopPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
