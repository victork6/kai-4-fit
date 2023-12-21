import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { ImageModalPage } from '../image-modal/image-modal.page';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profile: unknown;
  tabType = 'courses';

  constructor(
    private dataService: DataService,
    private modalController: ModalController,
    private router: Router
  ) {}

  ngOnInit() {
    this.profile = this.dataService.getProfile();
  }
  
  async openModal(imgUrl) {
    const modal = await this.modalController.create({
      component: ImageModalPage,
      cssClass: 'modal-container',
      componentProps: {
        data: imgUrl,
      },
    });
    return await modal.present();
  }

  goToSettings() {
    this.router.navigate(['settings']);
  }

  goToDetail(id) {
    this.router.navigate(['course-detail', id]);
  }

  editProfile(user) {
    let navigationExtras: NavigationExtras = {
      state: {
        user: user
      }
    };
    this.router.navigate(['edit-profile'], navigationExtras);
  }
}
