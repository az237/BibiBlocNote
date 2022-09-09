import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Note } from '../note';

@Component({
  selector: 'app-page-une',
  templateUrl: './page-une.component.html',
  styleUrls: ['./page-une.component.css']
})
export class PageUneComponent implements OnInit {
  note! : Note;

constructor(private router: Router){

}

  ngOnInit() {
    this.note = new Note(
      "note 1",
       1,
       new Date(),
      "Ceci est une note pour le test" 
    )
  }
  goToPageDeux(){
    this.router.navigate(['/page_deux']);
  }

  goToPageConnexion(){
    this.router.navigate(['/connexion']);
  }
  goToPageUne(){
    this.router.navigate(['/page_une']);
  }

  goToPageTrois(note: Note){
    this.router.navigate(['/page_trois', note.id]);
  }
}
