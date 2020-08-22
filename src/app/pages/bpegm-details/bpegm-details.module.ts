import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BpegmDetailsPageRoutingModule } from './bpegm-details-routing.module';

import { BpegmDetailsPage } from './bpegm-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BpegmDetailsPageRoutingModule
  ],
  declarations: [BpegmDetailsPage]
})
export class BpegmDetailsPageModule {}
