import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommunityDetailPageRoutingModule } from './community-detail-routing.module';

import { CommunityDetailPage } from './community-detail.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    CommunityDetailPageRoutingModule
  ],
  declarations: [CommunityDetailPage]
})
export class CommunityDetailPageModule {}
