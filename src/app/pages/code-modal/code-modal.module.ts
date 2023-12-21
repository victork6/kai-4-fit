import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodeModalPageRoutingModule } from './code-modal-routing.module';

import { CodeModalPage } from './code-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodeModalPageRoutingModule
  ],
  declarations: [CodeModalPage]
})
export class CodeModalPageModule {}
