import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CodeModalPage } from '../code-modal/code-modal.page';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  forgotForm: FormGroup;

  constructor(private fb: FormBuilder, private modalController: ModalController, private router: Router) {}

  ngOnInit() {
    this.forgotForm = this.fb.group({
      email: [null, [Validators.required]],
    });
  }

  async submitForgot() {
    const modal = await this.modalController.create({
      component: CodeModalPage,
      cssClass: 'code-container',
    });
    return await modal.present();
  }
}
