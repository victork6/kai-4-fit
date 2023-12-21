import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TrainingPageRoutingModule } from './training-routing.module';
import { TrainingPage } from './training.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainingPageRoutingModule,
    ComponentsModule,
    ChartsModule,
  ],
  declarations: [TrainingPage],
})
export class TrainingPageModule {}
