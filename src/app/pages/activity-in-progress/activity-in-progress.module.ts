import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivityInProgressPageRoutingModule } from './activity-in-progress-routing.module';

import { ActivityInProgressPage } from './activity-in-progress.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from '../../pipes/pipes.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivityInProgressPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [
    ActivityInProgressPage
  ]
})
export class ActivityInProgressPageModule {}
