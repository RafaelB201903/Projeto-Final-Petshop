import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPetshopPage } from './login-petshop.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPetshopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPetshopPageRoutingModule {}
