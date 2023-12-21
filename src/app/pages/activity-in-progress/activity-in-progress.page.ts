import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-activity-in-progress',
  templateUrl: './activity-in-progress.page.html',
  styleUrls: ['./activity-in-progress.page.scss'],
})
export class ActivityInProgressPage implements OnInit {
  percent: number = 0;
  progress: number = 1;
  @Input() activityTime: number = 60;

  start: boolean = false;
  textAction: string = 'Start';
  takeNumber: number = 100;
  disabled: boolean = false;

  _intervalSubs: Subscription;

  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  miliseconds: number = 0;

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  action() {
    this.start = !this.start;
    if (this.start) {
      this.textAction = 'Pause';
      this.startAction();
    } else {
      this.textAction = 'Start';
      this.pause();
    }
  }

  startAction() {
    this._intervalSubs = interval(1000).subscribe((count) => {
      this.percent = Math.floor((this.progress / this.activityTime) * 100);
      if (this.percent == 100) {
        this.disabled = true;
        this.unsubscribeAction();
      }
      this.progress++;
      this.setcrono();
    });
  }

  pause() {
    this.unsubscribeAction();
    this.takeNumber = 100 - this.percent;
  }

  stop() {
    this.unsubscribeAction();
    this.textAction = 'Start';
    this.takeNumber = 100;
    this.percent = 0;
    this.progress = 1;
    this.start = false;
    this.disabled = false;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
  }

  unsubscribeAction() {
    this._intervalSubs.unsubscribe();
  }

  setcrono() {
    this.seconds++;
    if (this.seconds == 60 && this.minutes == 59) {
      this.seconds = 0;
      this.minutes = 0;
      this.hours++;
      return;
    }
    if (this.seconds == 60) {
      this.minutes++;
      this.seconds = 0;
    }
  }

  dismissModal() {
    this.modalController.dismiss();
  }

}
