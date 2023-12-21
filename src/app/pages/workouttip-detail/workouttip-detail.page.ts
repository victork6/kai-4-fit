import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { WorkoutTip } from 'src/app/interfaces/workout-tip';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-workouttip-detail',
  templateUrl: './workouttip-detail.page.html',
  styleUrls: ['./workouttip-detail.page.scss'],
})
export class WorkouttipDetailPage implements OnInit {

  workoutTip: WorkoutTip;
  workoutId: number;

  constructor(private navCtrl: NavController, private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.workoutId = +params.get("id");
    });
    this.workoutTip = this.dataService.getWorkoutTips().find(item => item.id === this.workoutId);
  }

  goBack() {
    this.navCtrl.back();
  }
}
