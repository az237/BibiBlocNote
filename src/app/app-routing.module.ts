import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from "./connexion/connexion.component";
import { InscriptionComponent } from "./inscription/inscription.component";
import { AccueilComponent } from "./accueil/accueil.component";
import {NewnoteComponent} from "./newnote/newnote.component";
//import { LandingPageComponent } from './landing-page/landing-page.component';
//import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleNoteComponent } from './single-note/single-note.component';
const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path : 'login', component: ConnexionComponent},
  {path : 'inscription', component: InscriptionComponent},
  {path: 'listenote', component: AccueilComponent},
  {path: 'new_note', component:NewnoteComponent},
  {path: 'listenote/:id', component:SingleNoteComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}

