import { Injectable } from '@angular/core';
import { Note } from '../modeles/note.model';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
    notes: Note[] = [
      {
        id : 1,
        title : "Ma 1ere note",
        description: "ceci est un exemple pour les test",
        createdDate: new Date()
      },
      {
        id : 2,
        title : "Ma 2nde note",
        description: "ceci est un autre exemple également prevu pour les test",
        createdDate: new Date()
      },

    ];
  constructor() { }

  getAllNote():Note[]{
   return this.notes;
  }
  getNoteById(noteId:number): Note{
    const note = this.notes.find(note => note.id === noteId);
    if (!note) {
        throw new Error('FaceSnap not found!');
    } else {
        return note;
    }
  }

}
