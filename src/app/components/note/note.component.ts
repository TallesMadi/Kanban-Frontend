import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  noteContent: string = ''; // Para entrada do usuário
  savedMessage: string = ''; // Para armazenar a mensagem salva

  ngOnInit(): void {}

  loadMessage(): void {
    fetch('http://localhost:3000/data/message')
      .then(response => response.json())
      .then(data => {
        this.savedMessage = data.message; // Atualiza a savedMessage com o retorno
        this.noteContent = this.savedMessage; // Atualiza o noteContent para mostrar no textarea
      })
      .catch(error => console.error('Erro ao carregar a mensagem:', error));
  }

  saveNote(): void {
    const data = { message: this.noteContent }; // Usa o noteContent
    fetch('http://localhost:3000/data/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.text())
      .then(data => {
        console.log(data);
        window.alert('Nota salva com sucesso!');
      })
      .catch(error => console.error('Erro ao salvar a nota:', error));
  }
}
