import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PdfListPageRoutingModule } from './pdf-list-routing.module';

import { PdfListPage } from './pdf-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PdfListPageRoutingModule
  ],
  declarations: [PdfListPage]
})
export class PdfListPageModule {}
