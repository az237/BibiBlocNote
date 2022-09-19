import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import {FontAwesomeModule,FaIconLibrary} from "@fortawesome/angular-fontawesome";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NewnoteComponent } from './newnote/newnote.component';
import { fas } from '@fortawesome/free-solid-svg-icons';
//import { far } from '@fortawesome/free-regular-svg-icons';
@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    InscriptionComponent,
    AccueilComponent,
    NewnoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxBootstrapIconsModule.pick(allIcons),
    FontAwesomeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(private library: FaIconLibrary){
    library.addIconPacks(fas);
  }
}
