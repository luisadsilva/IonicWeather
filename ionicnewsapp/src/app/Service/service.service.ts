import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private apiKey: string = '12af38f6c5ed5b506960d22d9fc6455e'; 
  private baseUrl: string = 'https://api.openweathermap.org/data/2.5/weather'; 

  constructor(private httpClient: HttpClient) { }

  getCity(name:string='recife'): Observable<any>{
    const url = `${this.baseUrl}?q=${name}&appid=${this.apiKey}&units=metric&lang=pt`; 
    return this.httpClient.get<any>(url);
    }
    getWeatherByCoordinates(lat: number, lon: number): Observable<any> {
      const url = `${this.baseUrl}?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric&lang=pt`;
      return this.httpClient.get<any>(url);
    }
}
