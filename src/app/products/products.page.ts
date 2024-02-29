import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.services'; // Correct the import statement
import { LoadingController } from '@ionic/angular'; // Correct the import statement
import { Product } from './product.model';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  // products$ = Observable<Product[]>;

  // constructor(
  //   private productsService: ProductsService,
  //   private loadingCtrl: LoadingController // Correct the import statement
  // ) { }

  async ngOnInit() {
  //  const loading =  await this.loadingCtrl.create({message: 'Loading...'});
  //  loading.present();

  //  this.products$ = this.productsService.getProducts().pipe(
  //   tap(products =>{
  //     loading.dismiss();
  //     return products;
  //   })
  //  );
  }

}
