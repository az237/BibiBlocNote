import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from '../note';

@Component({
  selector: 'app-page-deux',
  templateUrl: './page-deux.component.html',
  styleUrls: ['./page-deux.component.css']
})
export class PageDeuxComponent implements OnInit {

  note! : Note;
  contenu_note!: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToPageUne(){
    this.router.navigate(['/page_une'])
  }
  saveNote(id: number, contenu_note: string, date: Date){

  }
}
