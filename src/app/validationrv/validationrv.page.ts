import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-validationrv',
  templateUrl: './validationrv.page.html',
  styleUrls: ['./validationrv.page.scss'],
})
export class ValidationrvPage implements OnInit {

  constructor(
    private navCtrl: NavController,
  ) { 
  }

  ngOnInit() {
  }

  goToAcceuil() {
    this.navCtrl.navigateForward("/home");
  }
}
