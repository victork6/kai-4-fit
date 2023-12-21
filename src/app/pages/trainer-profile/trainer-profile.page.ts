import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Trainer } from 'src/app/interfaces/trainer';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-trainer-profile',
  templateUrl: './trainer-profile.page.html',
  styleUrls: ['./trainer-profile.page.scss'],
})
export class TrainerProfilePage implements OnInit {

  trainer: Trainer;
  trainerId: number;

  constructor(private navCtrl: NavController, private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.trainerId = +params.get("id");
    });
    this.trainer = this.dataService.getTrainers().find(item => item.id === this.trainerId);
  }

  goBack() {
    this.navCtrl.back();
  }
}
