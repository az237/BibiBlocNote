import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from "./connexion/connexion.component";
import { InscriptionComponent } from "./inscription/inscription.component";
import { AccueilComponent } from "./accueil/accueil.component";
import {NewnoteComponent} from "./newnote/newnote.component";
const routes: Routes = [
  {path : '', component: ConnexionComponent},
  {path : 'inscription', component: InscriptionComponent},
  {path: 'accueil', component: AccueilComponent},
  {path: 'new_note', component:NewnoteComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}

