import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-payementrv',
  templateUrl: './payementrv.page.html',
  styleUrls: ['./payementrv.page.scss'],
})
export class PayementrvPage implements OnInit {

  constructor(
    private navCtrl: NavController,
  ) { 
  }

  ngOnInit() {
  }

  goToResume() {
    this.navCtrl.navigateForward("/resumerv");
  }

}
