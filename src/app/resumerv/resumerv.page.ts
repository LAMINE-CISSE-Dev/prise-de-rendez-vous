import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-resumerv',
  templateUrl: './resumerv.page.html',
  styleUrls: ['./resumerv.page.scss'],
})
export class ResumervPage implements OnInit {

  constructor(
    private navCtrl: NavController,
  ) { 
  }

  ngOnInit() {
  }

  goToValidation() {
    this.navCtrl.navigateForward("/validationrv");
  }
 
}
