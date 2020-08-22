import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BpegmPageRoutingModule } from './bpegm-routing.module';

import { BpegmPage } from './bpegm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BpegmPageRoutingModule
  ],
  declarations: [BpegmPage]
})
export class BpegmPageModule {}
