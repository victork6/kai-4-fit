import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkouttipDetailPageRoutingModule } from './workouttip-detail-routing.module';

import { WorkouttipDetailPage } from './workouttip-detail.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkouttipDetailPageRoutingModule,
    ComponentsModule
  ],
  declarations: [WorkouttipDetailPage]
})
export class WorkouttipDetailPageModule {}
