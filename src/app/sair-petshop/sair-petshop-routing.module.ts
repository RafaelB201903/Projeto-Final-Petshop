import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SairPetshopPage } from './sair-petshop.page';

const routes: Routes = [
  {
    path: '',
    component: SairPetshopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SairPetshopPageRoutingModule {}
