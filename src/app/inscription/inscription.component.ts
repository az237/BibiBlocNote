import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthentificationService } from '../services/authentification.service';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor(private router : Router, public authService: AuthentificationService) { }

  ngOnInit(): void {
  }
 /* onregister(){
    this.router.navigateByUrl('');
  }*/

}
