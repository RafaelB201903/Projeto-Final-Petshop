import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicialPetshopPage } from './inicial-petshop.page';

const routes: Routes = [
  {
    path: '',
    component: InicialPetshopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicialPetshopPageRoutingModule {}
