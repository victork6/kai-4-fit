import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotPasswordPageRoutingModule } from './forgot-password-routing.module';

import { ForgotPasswordPage } from './forgot-password.page';
import { CodeModalPage } from '../code-modal/code-modal.page';
import { CodeModalPageModule } from '../code-modal/code-modal.module';

@NgModule({
  entryComponents: [CodeModalPage],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    ForgotPasswordPageRoutingModule,
    CodeModalPageModule
  ],
  declarations: [ForgotPasswordPage]
})
export class ForgotPasswordPageModule {}
