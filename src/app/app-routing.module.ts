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
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SecureInnerPageGuard } from './guard/secure-inner-page.guard';
import { AuthGuard } from './guard/auth.guard';
const routes: Routes = [
  {path: '', redirectTo: '/accueil', pathMatch: 'full'},
  {path: 'accueil', component: LandingPageComponent},
  {path : 'login', component: ConnexionComponent},//, canActivate:[SecureInnerPageGuard]
  {path : 'inscription', component: InscriptionComponent},//, canActivate:[SecureInnerPageGuard]
  {path: 'listenote', component: AccueilComponent, canActivate:[AuthGuard]},
  {path: 'new_note', component:NewnoteComponent},
  {path: 'listenote/:id', component:SingleNoteComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}

