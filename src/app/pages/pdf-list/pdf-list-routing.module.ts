import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PdfListPage } from './pdf-list.page';

const routes: Routes = [
  {
    path: '',
    component: PdfListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PdfListPageRoutingModule {}
