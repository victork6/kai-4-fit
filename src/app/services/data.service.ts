import { Injectable } from '@angular/core';
import { Course } from '../interfaces/course';
import { Trainer } from '../interfaces/trainer';
import { WorkoutTip } from '../interfaces/workout-tip';

import mockDataJson from '../data/db.json';
import { Observable, of } from 'rxjs';
import { Community } from '../interfaces/community';
import { Training } from '../interfaces/training';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  mockData = mockDataJson;

  getProfile() {
    return this.mockData.profile;
  }

  getNewCourses(): Course[] {
    return this.mockData.courses.filter((item) => item.new === true);
  }

  getCourses(): Course[] {
    return this.mockData.courses;
  }

  getCoursesByType(type: string): Course[] {
    return this.mockData.courses.filter((item) => item.type === type);
  }

  getTrainers(): Trainer[] {
    return this.mockData.trainers;
  }

  getCommunity(): Community[] {
    return this.mockData.community;
  }

  getWorkoutTips(): WorkoutTip[] {
    return this.mockData.tips;
  }

  getTraining(): Training[] {
    return this.mockData.training;
  }

  getTrainingByDay(day: string): Training {
    return this.mockData.training.find((item) => item.weekday === day);
  }
}
