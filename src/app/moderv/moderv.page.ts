import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-moderv',
  templateUrl: './moderv.page.html',
  styleUrls: ['./moderv.page.scss'],
})
export class ModervPage implements OnInit {
  constructor(
    private navCtrl: NavController,
  ) { 
  }

  ngOnInit() {
  }

  goToDuree() {
    this.navCtrl.navigateForward("/durerv");
  }

}
