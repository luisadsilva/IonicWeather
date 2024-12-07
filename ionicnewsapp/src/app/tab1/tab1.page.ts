import { Component } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { FiltroApiService } from '../Service/filtro-api.service';
import { Geolocation } from '@capacitor/geolocation';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

 BuscarCity: string= 'Recife';
 cityClima:any={
  name: '',
    main: {
      temp: 0,
      humidity: 0
    },
    weather: [{
      description: '',
    }]
 };

 latitude: number = 0;
 longitude: number = 0;

  constructor(private ServiceService: ServiceService,
    private filtroApi: FiltroApiService,
  ) {}

  ngOnInit() {
    this.printCurrentPosition();
    this.localizarCidade();
  }

  async localizarCidade() {
    try {
  
      const coordinates = await Geolocation.getCurrentPosition();
      this.latitude = coordinates.coords.latitude;
      this.longitude = coordinates.coords.longitude;
      console.log('Localização atual:', this.latitude, this.longitude);
      this.buscarClimaPorCoordenadas(this.latitude, this.longitude);
    } catch (error) {
      console.error('Erro ao obter a localização:', error); 
    }
  }

  buscarClimaPorCoordenadas(lat: number, lon: number) {
    this.ServiceService.getWeatherByCoordinates(lat, lon)
      .subscribe((value: any) => {
        this.cityClima.name = value.name || '';
        this.cityClima.main.temp = value.main?.temp || 0;
        this.cityClima.main.humidity = value.main?.humidity || 0;
        this.cityClima.weather.description = value.weather[0]?.description || '';
      });
  }

  async printCurrentPosition() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      this.latitude = coordinates.coords.latitude;
      this.longitude = coordinates.coords.longitude;
      console.log('Current position:', coordinates);
    } catch (error) {
      console.error('Erro ao obter a localização', error);
    }
  }

  PrevisaoCidade(){
    this.ServiceService.getCity(this.BuscarCity)
    .subscribe((value: any) => {
      this.cityClima.name = value.name || '';
      this.cityClima.main.temp=  value.main?.temp ? value.main.temp : 0;
      this.cityClima.main.humidity = value.main?.humidity ? value.main.humidity : 0;
      this.cityClima.weather.description = value.weather && value.weather.length > 0 ? value.weather[0].description : '';
    });
  }
  
  
  adicionarFavoritos() {
    if (!this.cityClima.name) {
      alert('Nenhuma cidade foi carregada.');
      return;
    }
    const cidade = {
      name: this.cityClima.name,
      temp: this.cityClima.main.temp,
      humidity: this.cityClima.main.humidity,
      description: this.cityClima.weather.description
    };
    if (this.filtroApi.isCidadeFavorita(cidade)) {
      alert(`${this.cityClima.name} já está nos favoritos!`);
    } else {
      this.filtroApi.adicionarFavoritos(cidade);
      alert(`${this.cityClima.name} foi adicionada aos favoritos!`);
    }
}


}

