import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CourseDetailPageRoutingModule } from './course-detail-routing.module';
import { CourseDetailPage } from './course-detail.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseDetailPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [CourseDetailPage],
})
export class CourseDetailPageModule {}
