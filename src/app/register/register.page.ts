import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async register() {
    const alert = await this.alertController.create({
      header: '¡Congratulations!',
      message: 'Your account has been created successfully',
      buttons: ['OK']
    });

    await alert.present();
  }

}
