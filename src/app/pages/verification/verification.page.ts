import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.page.html',
  styleUrls: ['./verification.page.scss'],
})
export class VerificationPage implements OnInit {
  index: number = 0;
  verificationArray: string[] = ['-', '-', '-', '-'];
  loading: any;
  validCode = '1234';

  keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'Resend', 0, -1];

  constructor(public loadingController: LoadingController, private router: Router) {}

  ngOnInit() {}

  onClick(value: number) {

    if (value >= 0 && this.index > -1 && this.index < 4) {
      this.verificationArray[this.index] = value.toString();

      if (this.index < 4) this.index++;
    }
    if (value == -1 && this.index > -1 && this.index <= 4) {
      this.verificationArray[this.index - 1] = '-';

      if (this.index > 0) this.index--;
    }

    if(this.validCode === this.verificationArray.join('')) {
      this.presentLoading();
      setTimeout(() => {
        this.loading.dismiss();
        this.router.navigate(['tabs/home']);
      }, 2000);
    }
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({      
      message:
        '<span class="loader"><span class="loader-inner"></span></span><p class="loader-text">Loading</p>',
      duration: 2000,
      spinner: null,
    });
    await this.loading.present();
  }
}
