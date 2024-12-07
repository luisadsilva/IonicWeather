import { Component } from '@angular/core';

@Component({
  selector: 'app-tabc',
  templateUrl: './tabc.page.html',
  styleUrls: ['./tabc.page.scss'],
})
export class TabcPage {
  nome: string = '';
  email: string = '';
  senha: string = '';

  constructor() {}

  onSubmit() {
    if (this.nome && this.email && this.senha) {
      // Criar um objeto para armazenar os dados
      const userData = {
        nome: this.nome,
        email: this.email,
        senha: this.senha,
      };

      // Armazenar os dados no Local Storage
      localStorage.setItem('userData', JSON.stringify(userData));

      alert('Cadastro realizado com sucesso!');

      // Limpar os campos após salvar
      this.nome = '';
      this.email = '';
      this.senha = '';
    } else {
      alert('Preencha todos os campos corretamente.');
    }
  }

  // Método para recuperar os dados do Local Storage (opcional)
  getUserData() {
    const userData = localStorage.getItem('userData');
    if (userData) {
      console.log('Dados do usuário:', JSON.parse(userData));
    } else {
      console.log('Nenhum dado encontrado.');
    }
  }
}
