import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/interfaces/course';
import { Trainer } from 'src/app/interfaces/trainer';
import { WorkoutTip } from 'src/app/interfaces/workout-tip';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  newCourses: Course[] = [];
  courses: Course[] = [];
  trainers: Trainer[] = [];
  workoutTips: WorkoutTip[] = [];

  slideConfig = {
    spaceBetween: 10,
    slidesPerView: 2.15,
  };

  workOutConfig = {
    spaceBetween: 20,
    slidesPerView: 1.2,
  };

  newConfig = {
    slidesPerView: 1,
  };

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.newCourses = this.dataService.getNewCourses();
    this.courses = this.dataService.getCourses();
    this.trainers = this.dataService.getTrainers();
    this.workoutTips = this.dataService.getWorkoutTips();
  }

  navigateToSearch() {
    this.router.navigate(['/search']);
  }

  goToCourse(id: number) {
    this.router.navigate(['course-detail', id]);
  }

  goToTip(id) {
    this.router.navigate(['workouttip-detail', id]);
  }
}
