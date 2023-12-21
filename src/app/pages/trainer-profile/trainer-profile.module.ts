import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainerProfilePageRoutingModule } from './trainer-profile-routing.module';

import { TrainerProfilePage } from './trainer-profile.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainerProfilePageRoutingModule,
    ComponentsModule
  ],
  declarations: [TrainerProfilePage]
})
export class TrainerProfilePageModule {}
