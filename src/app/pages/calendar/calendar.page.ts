import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/interfaces/course';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  courses: Course[];

  constructor(private dataService: DataService) { 
  }

  ngOnInit() {
    this.courses = this.dataService.getCourses();
  }


}
