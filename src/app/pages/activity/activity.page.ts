import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivityInProgressPage } from '../activity-in-progress/activity-in-progress.page';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
})
export class ActivityPage implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  startNow() {}

  async openModal() {
    const modal = await this.modalController.create({
      component: ActivityInProgressPage,
      componentProps: {
        data: '',
      },
    });
    return await modal.present();
  }
}
