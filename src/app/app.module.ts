import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import {FontAwesomeModule,FaIconLibrary} from "@fortawesome/angular-fontawesome";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NewnoteComponent } from './newnote/newnote.component';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OwlModule } from 'ngx-owl-carousel';
import { FooterComponent } from './footer/footer.component';
import { SingleNoteComponent } from './single-note/single-note.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthentificationService } from './services/authentification.service';

//import { far } from '@fortawesome/free-regular-svg-icons';
@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    InscriptionComponent,
    AccueilComponent,
    NewnoteComponent,
    HeaderComponent,
    LandingPageComponent,
    FooterComponent,
    SingleNoteComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
   // NgxBootstrapIconsModule.pick(allIcons),
    FontAwesomeModule,
    OwlModule,
    ReactiveFormsModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
    
  ],
  providers: [AuthentificationService],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(private library: FaIconLibrary){
    library.addIconPacks(fas);
  }
}
