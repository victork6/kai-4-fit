import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivityPageRoutingModule } from './activity-routing.module';

import { ActivityPage } from './activity.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ActivityInProgressPage } from '../activity-in-progress/activity-in-progress.page';
import { ActivityInProgressPageModule } from '../activity-in-progress/activity-in-progress.module';

@NgModule({
  entryComponents: [ActivityInProgressPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ActivityPageRoutingModule,
    ActivityInProgressPageModule
  ],
  declarations: [ActivityPage]
})
export class ActivityPageModule {}
