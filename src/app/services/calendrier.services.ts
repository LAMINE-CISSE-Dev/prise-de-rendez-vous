import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; // Import Observable
import { Calendrier } from '../pages/calendrier/calendrier.model';



@Injectable({
  providedIn: 'root'
})
export class CalendrierService {
  apiUrl = 'http://localhost:8000/api'; // Remove "/products" from apiUrl

  constructor(private http: HttpClient) {}

  getHome(): Observable<Calendrier[]> {
    return this.http.get<Calendrier[]>(`${this.apiUrl}/docteurs`);
  }
}
