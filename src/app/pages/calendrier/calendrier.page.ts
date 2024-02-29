import { Component, OnInit } from '@angular/core';
import { Calendrier } from './calendrier.model';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CalendrierService } from 'src/app/services/calendrier.services';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.page.html',
  styleUrls: ['./calendrier.page.scss'],
})
export class CalendrierPage implements OnInit {
  docteurs$: Observable<Calendrier[]> = new Observable<Calendrier[]>(); // Removed the unnecessary initialization

  constructor(
    private navCtrl: NavController,
    private docteurService: CalendrierService,
    private loadingCtrl: LoadingController
  ) {} // Removed the extra 'constructor' keyword

  ngOnInit() {
    // this.loadData();
  }

  goToInfo() {
    this.navCtrl.navigateForward("/moderv");
  }
  // async loadData() {
  //   const loading = await this.loadingCtrl.create({ message: 'Loading...' });
  //   await loading.present();

  //   this.docteurs$ = this.docteurService.getHome().pipe(
  //     tap((docteurs) => {
  //       loading.dismiss();
  //       return docteurs;
  //     })
  //   );
  // }
}
