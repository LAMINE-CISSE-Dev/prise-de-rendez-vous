import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; // Import Observable
import { Acceuil } from '../pages/acceuil/acceuil.model';



@Injectable({
  providedIn: 'root'
})
export class HomeService {
  apiUrl = 'http://localhost:8000/api'; // Remove "/products" from apiUrl

  constructor(private http: HttpClient) {}

  getHome(): Observable<Acceuil[]> {
    return this.http.get<Acceuil[]>(`${this.apiUrl}/docteurs`);
  }
}
