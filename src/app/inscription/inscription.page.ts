import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, AlertController, ToastController, LoadingController } from "@ionic/angular";
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
  ) { }

  form = new FormGroup({
    firstname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  // async onSubmit() {
  //   const loading = await this.loadingCtrl.create({ message: 'Registering...' });
  //   await loading.present();
  //   this.authService.register(this.form.value).subscribe(
  //     // If success
  //     async () => {
  //       const toast = await this.toastCtrl.create({ message: 'User Created', duration: 2000, color: 'dark' });
  //       await toast.present();
  //       loading.dismiss();
  //       this.form.reset();
  //     },
  //     // If there is an error
  //     async () => {
  //       const alert = await this.alertCtrl.create({ message: 'There is an error', buttons: ['OK'] });
  //       loading.dismiss();
  //       await alert.present();
  //     }
  //   );
  // }

  ngOnInit() {
  }

  goToLogin() {
    this.navCtrl.navigateForward("/login");
  }
}
