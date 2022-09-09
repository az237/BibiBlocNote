import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../note';
import { PageUneComponent } from '../page-une/page-une.component';

@Component({
  selector: 'app-page-trois',
  templateUrl: './page-trois.component.html',
  styleUrls: ['./page-trois.component.css']
})
export class PageTroisComponent implements OnInit {
  note!: Note;

  constructor(private router: Router
 ) { }


  ngOnInit(){
  }
  goToPageUne(){
    this.router.navigate(['/page_une'])
  }


}
