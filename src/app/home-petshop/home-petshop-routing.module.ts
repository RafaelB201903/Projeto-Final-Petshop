import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePetshopPage } from './home-petshop.page';

const routes: Routes = [
  {
    path: '',
    component: HomePetshopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePetshopPageRoutingModule {}
