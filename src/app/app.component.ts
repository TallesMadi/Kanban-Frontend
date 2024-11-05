import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { DivCardsComponent } from "./components/div-cards/div-cards.component";
import { FooterComponent } from "./components/footer/footer.component";
import { TituloComponent } from "./components/titulo/titulo.component";
import { HttpClient, HttpClientModule  } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, DivCardsComponent, FooterComponent, TituloComponent, FormsModule, CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kanban';

  data: any;

  constructor() {
    this.fetchData();
  }

  fetchData() {
    fetch('http://localhost:3000/data')
      .then(response => response.json())
      .then(data => {
        this.data = data;
        console.log(data);
      })
      .catch(error => console.error('Erro ao buscar dados:', error));
  }
}
