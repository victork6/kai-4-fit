import { Component, OnInit } from '@angular/core';
import mockData from '../../data/db.json';
import { Course } from '../../interfaces/course';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.page.html',
  styleUrls: ['./course-detail.page.scss'],
})
export class CourseDetailPage implements OnInit {

  course: Course;
  courseId: number;

  tabType = 'details';
  
  constructor(private navCtrl: NavController, private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.courseId = +params.get("id");
    });
    this.course = this.dataService.getCourses().find(item => item.id === this.courseId);
  }

  goBack() {
    this.navCtrl.back();
  }
}
