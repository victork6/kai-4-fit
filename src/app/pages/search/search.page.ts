import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Course } from 'src/app/interfaces/course';
import { Trainer } from 'src/app/interfaces/trainer';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  newCourses: Course[];
  trainers: Trainer[];

  slideConfig = {
    spaceBetween: 10,
    slidesPerView: 2.15,
  };
  
  constructor(private navCtrl: NavController, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.newCourses = this.dataService.getNewCourses();
    this.trainers = this.dataService.getTrainers();
  }

  goBack() {
    this.navCtrl.back();
  }

  goToDetail(id) {
    this.router.navigate(['course-detail', id]);
  }
}
