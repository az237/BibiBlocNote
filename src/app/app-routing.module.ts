import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { PageDeuxComponent } from './page-deux/page-deux.component';
import { PageTroisComponent } from './page-trois/page-trois.component';
import { PageUneComponent } from './page-une/page-une.component';

const routes: Routes = [
  {path: 'connexion', component: ConnexionComponent},
  {path: 'page_deux', component: PageDeuxComponent},
  {path: 'page_une', component: PageUneComponent},
  {path: 'page_trois', component: PageTroisComponent},
  {path: '', redirectTo: 'connexion', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
