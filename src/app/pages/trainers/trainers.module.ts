import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainersPageRoutingModule } from './trainers-routing.module';

import { TrainersPage } from './trainers.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainersPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TrainersPage]
})
export class TrainersPageModule {}
