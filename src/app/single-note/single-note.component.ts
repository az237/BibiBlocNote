import { Component, OnInit } from '@angular/core';
import { Note } from '../modeles/note.model';
import { NoteService } from '../services/notes.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-single-note',
  templateUrl: './single-note.component.html',
  styleUrls: ['./single-note.component.css']
})

export class SingleNoteComponent implements OnInit {
 //@Input() note! : Note[];
 note!: Note;

  constructor(private noteService:NoteService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const noteId = +this.route.snapshot.params['id']; // on recupère la route active (+) permet de transformer une chaine en entier
    //this.faceSnap = this.faceSnapsService.getFaceSnapById(snapId);
    this.note = this.noteService.getNoteById(noteId);

  }


}
