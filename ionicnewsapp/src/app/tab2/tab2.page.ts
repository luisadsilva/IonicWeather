import { Component } from '@angular/core';
import { FiltroApiService } from '../Service/filtro-api.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  cidadesFavoritas: any[] = [];

  constructor(private filtroApi : FiltroApiService) {}
  
  ngOnInit() {
    this.cidadesFavoritas = this.filtroApi.getCityFavo();
  }
  removerFavorito(cidade: any) {
    this.filtroApi.removerFavoritos(cidade);
    this.cidadesFavoritas = this.filtroApi.getCityFavo();
  }
}
