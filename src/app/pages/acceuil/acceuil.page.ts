import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HomeService } from 'src/app/services/home.services';
import { Acceuil } from './acceuil.model';


@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.page.html',
  styleUrls: ['./acceuil.page.scss'],
})
export class AcceuilPage implements OnInit {

  docteurs$: Observable<Acceuil[]> = new Observable<Acceuil[]>();

  constructor(
    private navCtrl: NavController,
    private docteurService: HomeService,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    const loading = await this.loadingCtrl.create({ message: 'Loading...' });
    await loading.present();

    this.docteurs$ = this.docteurService.getHome().pipe(
      tap((docteurs) => {
        loading.dismiss();
        return docteurs;
      })
    );
  }

  goToLogin() {
    this.navCtrl.navigateForward('/login');
  }
}
