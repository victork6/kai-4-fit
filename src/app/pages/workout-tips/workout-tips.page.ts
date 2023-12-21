import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { WorkoutTip } from 'src/app/interfaces/workout-tip';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-workout-tips',
  templateUrl: './workout-tips.page.html',
  styleUrls: ['./workout-tips.page.scss'],
})
export class WorkoutTipsPage implements OnInit {

  tips: WorkoutTip[] = [];

  constructor(private navCtrl: NavController, private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.tips = this.dataService.getWorkoutTips();
  }

  goBack() {
    this.navCtrl.back();
  }

  goToDetail(id) {
    this.router.navigate(['workouttip-detail', id]);
  }
}
