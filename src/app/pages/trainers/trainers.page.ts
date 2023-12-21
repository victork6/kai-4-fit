import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';
import { Trainer } from 'src/app/interfaces/trainer';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.page.html',
  styleUrls: ['./trainers.page.scss'],
})
export class TrainersPage implements OnInit {

  trainers: Trainer[] = [];
  verifieds: Trainer[] = [];

  slideConfig = {
    initialSlide: 0,
    slidesPerView: 1.2,
    spaceBetween: 10
  };

  constructor(private navCtrl: NavController, private dataService: DataService, private router: Router, private platform: Platform) { 
    this.slideConfig.spaceBetween = this.platform.is('android') ? 10 : 40
  }

  ngOnInit() {
    this.verifieds = this.dataService.getTrainers().filter(item => !!item.verified);
    this.trainers = this.dataService.getTrainers().filter(item => !item.verified);
  }

  navigateDetail(id: number) {
    this.router.navigate(['/trainer-profile', id]);
  }
  
  goBack() {
    this.navCtrl.back();
  }
}
