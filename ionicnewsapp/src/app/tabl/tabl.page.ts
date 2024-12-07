import { Component } from '@angular/core';

@Component({
  selector: 'app-tabl',
  templateUrl: './tabl.page.html',
  styleUrls: ['./tabl.page.scss'],
})
export class TablPage {
  email: string = '';
  senha: string = '';

  constructor() { }

  onLogin() {
     if(this.email === 'usuario@exemplo.com' && this.senha === 'senha123'){
      alert('Login realizado com sucess!');
     } else {
      alert('Usuário ou senha incorretos!');

  }

  }
}
