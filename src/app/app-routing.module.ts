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
    path: 'inicial-petshop',
    loadChildren: () => import('./inicial-petshop/inicial-petshop.module').then( m => m.InicialPetshopPageModule)
  },
  {
    path: 'sair-petshop',
    loadChildren: () => import('./sair-petshop/sair-petshop.module').then( m => m.SairPetshopPageModule)
  },
  {
    path: 'cadastro-petshop',
    loadChildren: () => import('./cadastro-petshop/cadastro-petshop.module').then( m => m.CadastroPetshopPageModule)
  },
  {
    path: 'redefinir-senha',
    loadChildren: () => import('./redefinir-senha/redefinir-senha.module').then( m => m.RedefinirSenhaPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'pedidos-novos',
    loadChildren: () => import('./pages/pedidos-novos/pedidos-novos.module').then( m => m.PedidosNovosPageModule)
  },
  {
    path: 'pedidos-novos',
    loadChildren: () => import('./pages/pedidos-novos/pedidos-novos.module').then( m => m.PedidosNovosPageModule)
  },
  {
    path: 'pedidos-em-andamento',
    loadChildren: () => import('./pages/pedidos-em-andamento/pedidos-em-andamento.module').then( m => m.PedidosEmAndamentoPageModule)
  },
  {
    path: 'pedidos-finalizados',
    loadChildren: () => import('./pages/pedidos-finalizados/pedidos-finalizados.module').then( m => m.PedidosFinalizadosPageModule)
  },
  {
    path: 'ver-mais-pedido-novo',
    loadChildren: () => import('./pages/ver-mais-pedido-novo/ver-mais-pedido-novo.module').then( m => m.VerMaisPedidoNovoPageModule)
  },
  {
    path: 'ver-mais-pedido-em-andamento',
    loadChildren: () => import('./pages/ver-mais-pedido-em-andamento/ver-mais-pedido-em-andamento.module').then( m => m.VerMaisPedidoEmAndamentoPageModule)
  },
  {
    path: 'ver-mais-pedidos-finalizados',
    loadChildren: () => import('./pages/ver-mais-pedidos-finalizados/ver-mais-pedidos-finalizados.module').then( m => m.VerMaisPedidosFinalizadosPageModule)
  },
  {
    path: 'atualizar-info',
    loadChildren: () => import('./atualizar-info/atualizar-info.module').then( m => m.AtualizarInfoPageModule)
  },
  {
    path: 'add-imagem',
    loadChildren: () => import('./add-imagem/add-imagem.module').then( m => m.AddImagemPageModule)
  },
  {
    path: 'alt-senha',
    loadChildren: () => import('./alt-senha/alt-senha.module').then( m => m.AltSenhaPageModule)
  },  {
    path: 'confirmar-pedido',
    loadChildren: () => import('./pages/confirmar-pedido/confirmar-pedido.module').then( m => m.ConfirmarPedidoPageModule)
  },

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
