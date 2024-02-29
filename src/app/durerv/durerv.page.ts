import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-durerv',
  templateUrl: './durerv.page.html',
  styleUrls: ['./durerv.page.scss'],
})
export class DurervPage implements OnInit {

  constructor(
    private navCtrl: NavController,
  ) { 
  }

  ngOnInit() {
  }

  goToPayer() {
    this.navCtrl.navigateForward("/payementrv");
  }
}
