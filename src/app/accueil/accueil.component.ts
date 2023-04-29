import { Component, Input, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { Note } from '../modeles/note.model';
import { NoteService } from '../services/notes.service';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  @Input() note! : Note[];

  constructor(private noteService:NoteService) { }

  ngOnInit(): void {
    this.note = this.noteService.getAllNote()
  }
  

}
