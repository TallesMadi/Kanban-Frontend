import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-titulo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './titulo.component.html',
  styleUrl: './titulo.component.css'
})
export class TituloComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
