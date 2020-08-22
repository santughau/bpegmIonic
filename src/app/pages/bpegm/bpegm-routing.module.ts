import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BpegmPage } from './bpegm.page';

const routes: Routes = [
  {
    path: '',
    component: BpegmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BpegmPageRoutingModule {}
