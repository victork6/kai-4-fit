import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/interfaces/course';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: 'courses.page.html',
  styleUrls: ['courses.page.scss']
})
export class CoursesPage implements OnInit {

  tabType = 'Beginner';

  courses: Course[] = [];

  constructor(private dataService: DataService,  private router: Router) {}

  ngOnInit(): void {
    this.loadData(this.tabType);
  }


  tabChanged(evt) {
    const currentTab = evt.detail.value;
    this.loadData(currentTab);
  }

  loadData(type) {
    const data = this.dataService.getCoursesByType(type);
    this.courses = data;
    return this.courses;
  }

  navigateToSearch() {
    this.router.navigate(['/search']);
  }

  goToDetail(id) {
    this.router.navigate(['course-detail', id]);
  }
  
}


