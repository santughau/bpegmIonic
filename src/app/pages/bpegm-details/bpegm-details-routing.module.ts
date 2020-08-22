import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BpegmDetailsPage } from './bpegm-details.page';

const routes: Routes = [
  {
    path: '',
    component: BpegmDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BpegmDetailsPageRoutingModule {}
