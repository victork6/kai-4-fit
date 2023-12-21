import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from './course-card/course-card.component';
import { TrainerCardComponent } from './trainer-card/trainer-card.component';
import { TrainerItemComponent } from './trainer-item/trainer-item.component';
import { WorkoutTipCardComponent } from './workout-tip-card/workout-tip-card.component';
import { CommunityCardComponent } from './community-card/community-card.component';
import { CommentItemComponent } from './comment-item/comment-item.component';
import { ReviewItemComponent } from './review-item/review-item.component';
import { ScheduleItemComponent } from './schedule-item/schedule-item.component';
import { HCalendarComponent } from './h-calendar/h-calendar.component';
import { TrainerActivityComponent } from './trainer-activity/trainer-activity.component';
import { TrainingPlayCardComponent } from './training-play-card/training-play-card.component';
import { CircleProgressComponent } from './circle-progress/circle-progress.component';
import { KeypadButtonComponent } from './keypad-button/keypad-button.component';

@NgModule({
  declarations: [
    CourseCardComponent,
    TrainerCardComponent,
    TrainerItemComponent,
    WorkoutTipCardComponent,
    CommunityCardComponent,
    CommentItemComponent,
    ReviewItemComponent,
    ScheduleItemComponent,
    HCalendarComponent,
    TrainerActivityComponent,
    TrainingPlayCardComponent,
    CircleProgressComponent,
    KeypadButtonComponent
  ],
  imports: [CommonModule],
  exports: [
    CourseCardComponent,
    TrainerCardComponent,
    TrainerItemComponent,
    WorkoutTipCardComponent,
    CommunityCardComponent,
    CommentItemComponent,
    ReviewItemComponent,
    ScheduleItemComponent,
    HCalendarComponent,
    TrainerActivityComponent,
    TrainingPlayCardComponent,
    CircleProgressComponent,
    KeypadButtonComponent
  ],
})
export class ComponentsModule {}
