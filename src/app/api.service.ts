import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://newsapi.org/v2/everything?q=apple&from=2023-10-06&to=2023-10-06&sortBy=popularity&apiKey=73862c9f87ba4144a72fc3256c354d6b';
  

  constructor(private _http: HttpClient) { }

  getData(): Observable<any> {
    return this._http.get<any>(this.apiUrl);
  }
}
