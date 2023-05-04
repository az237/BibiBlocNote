import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { AuthentificationService } from '../services/authentification.service';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  constructor(private router: Router, public authServive:AuthentificationService) { }

  ngOnInit(): void {
  }

  /*onlogin(){
    this.router.navigateByUrl('/listenote');
  }*/

}
