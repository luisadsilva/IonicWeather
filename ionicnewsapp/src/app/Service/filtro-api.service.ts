import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FiltroApiService {

private cityFavo: any[] = [];

  constructor() { }

  adicionarFavoritos(city:any):void{
this.cityFavo.push(city);
this.salvarFavoritos();
  }

  isCidadeFavorita(city: any): boolean {
    return this.cityFavo.some(fav => fav.name === city.name && fav.country === city.country);
  }

getCityFavo(): any[] {
return this.cityFavo;
}

setCityFavo(city: any[]): void{
  this.cityFavo= city;
}

removerFavoritos(city: any): void {
  this.cityFavo = this.cityFavo.filter(fav => fav.name !== city.name || fav.country !== city.country);
  this.salvarFavoritos(); 
}

private salvarFavoritos(): void {
  localStorage.setItem('cityFavo', JSON.stringify(this.cityFavo));
}
}