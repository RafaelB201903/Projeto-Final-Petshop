import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectToLogin = () => redirectUnauthorizedTo(['inicial-petshop']);

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
    loadChildren: () => import('./sair-petshop/sair-petshop.module').then( m => m.SairPetshopPageModule),
    canActivate : [AngularFireAuthGuard], 
    data : {authGuardPipe : redirectToLogin}
  },
  {
    path: 'cadastro-petshop',
    loadChildren: () => import('./cadastro-petshop/cadastro-petshop.module').then( m => m.CadastroPetshopPageModule),
  
  },
  {
    path: 'redefinir-senha',
    loadChildren: () => import('./redefinir-senha/redefinir-senha.module').then( m => m.RedefinirSenhaPageModule),
    canActivate : [AngularFireAuthGuard], 
    data : {authGuardPipe : redirectToLogin}
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate : [AngularFireAuthGuard], 
    data : {authGuardPipe : redirectToLogin}
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule),
    canActivate : [AngularFireAuthGuard], 
    data : {authGuardPipe : redirectToLogin}
  },
  {
    path: 'pedidos-novos',
    loadChildren: () => import('./pages/pedidos-novos/pedidos-novos.module').then( m => m.PedidosNovosPageModule),
    canActivate : [AngularFireAuthGuard], 
    data : {authGuardPipe : redirectToLogin}
  },
  {
    path: 'pedidos-novos',
    loadChildren: () => import('./pages/pedidos-novos/pedidos-novos.module').then( m => m.PedidosNovosPageModule),
    canActivate : [AngularFireAuthGuard], 
    data : {authGuardPipe : redirectToLogin}
  },
  {
    path: 'pedidos-em-andamento',
    loadChildren: () => import('./pages/pedidos-em-andamento/pedidos-em-andamento.module').then( m => m.PedidosEmAndamentoPageModule),
    canActivate : [AngularFireAuthGuard], 
    data : {authGuardPipe : redirectToLogin}
  },
  {
    path: 'pedidos-finalizados',
    loadChildren: () => import('./pages/pedidos-finalizados/pedidos-finalizados.module').then( m => m.PedidosFinalizadosPageModule),
    canActivate : [AngularFireAuthGuard], 
    data : {authGuardPipe : redirectToLogin}
  },
  {
    path: 'ver-mais-pedido-novo/:id',
    loadChildren: () => import('./pages/ver-mais-pedido-novo/ver-mais-pedido-novo.module').then( m => m.VerMaisPedidoNovoPageModule),
    canActivate : [AngularFireAuthGuard], 
    data : {authGuardPipe : redirectToLogin}
  },
  {
    path: 'ver-mais-pedido-em-andamento/:id',
    loadChildren: () => import('./pages/ver-mais-pedido-em-andamento/ver-mais-pedido-em-andamento.module').then( m => m.VerMaisPedidoEmAndamentoPageModule),
    canActivate : [AngularFireAuthGuard], 
    data : {authGuardPipe : redirectToLogin}
  },
  {
    path: 'ver-mais-pedidos-finalizados/:id',
    loadChildren: () => import('./pages/ver-mais-pedidos-finalizados/ver-mais-pedidos-finalizados.module').then( m => m.VerMaisPedidosFinalizadosPageModule),
    canActivate : [AngularFireAuthGuard], 
    data : {authGuardPipe : redirectToLogin}
  },
  {
    path: 'atualizar-info',
    loadChildren: () => import('./atualizar-info/atualizar-info.module').then( m => m.AtualizarInfoPageModule),
    canActivate : [AngularFireAuthGuard], 
    data : {authGuardPipe : redirectToLogin}
  },
  {
    path: 'add-imagem',
    loadChildren: () => import('./add-imagem/add-imagem.module').then( m => m.AddImagemPageModule),
    canActivate : [AngularFireAuthGuard], 
    data : {authGuardPipe : redirectToLogin}
  },
  {
    path: 'alt-senha',
    loadChildren: () => import('./alt-senha/alt-senha.module').then( m => m.AltSenhaPageModule),
    canActivate : [AngularFireAuthGuard], 
    data : {authGuardPipe : redirectToLogin}
  },
  {
    path: 'confirmar-pedido/:id',
    loadChildren: () => import('./pages/confirmar-pedido/confirmar-pedido.module').then( m => m.ConfirmarPedidoPageModule),
    canActivate : [AngularFireAuthGuard], 
    data : {authGuardPipe : redirectToLogin}
  },
  {
    path: 'finalizar-pedido/:id',
    loadChildren: () => import('./pages/finalizar-pedido/finalizar-pedido.module').then( m => m.FinalizarPedidoPageModule),
    canActivate : [AngularFireAuthGuard], 
    data : {authGuardPipe : redirectToLogin}
  },


  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
