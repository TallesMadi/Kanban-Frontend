import { Component } from '@angular/core';
import { NoteComponent } from '../note/note.component';

@Component({
  selector: 'app-div-cards',
  standalone: true,
  imports: [NoteComponent],
  templateUrl: './div-cards.component.html',
  styleUrls: ['./div-cards.component.css']
})
export class DivCardsComponent {

}
