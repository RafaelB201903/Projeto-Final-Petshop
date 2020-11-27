import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroPetshopPage } from './cadastro-petshop.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroPetshopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroPetshopPageRoutingModule {}
