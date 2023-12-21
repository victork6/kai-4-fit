import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkoutTipsPageRoutingModule } from './workout-tips-routing.module';

import { WorkoutTipsPage } from './workout-tips.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkoutTipsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [WorkoutTipsPage]
})
export class WorkoutTipsPageModule {}
