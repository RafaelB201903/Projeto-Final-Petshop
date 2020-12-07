import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AltSenhaPage } from './alt-senha.page';

const routes: Routes = [
  {
    path: '',
    component: AltSenhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AltSenhaPageRoutingModule {}
