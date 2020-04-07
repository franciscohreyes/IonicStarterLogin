import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async resetPassword() {
    const alert = await this.alertController.create({
      header: 'Email sent',
      message: 'We have sent you a link to your email',
      buttons: ['OK']
    });

    await alert.present();
  }

}
