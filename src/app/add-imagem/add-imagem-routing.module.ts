import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddImagemPage } from './add-imagem.page';

const routes: Routes = [
  {
    path: '',
    component: AddImagemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddImagemPageRoutingModule {}
