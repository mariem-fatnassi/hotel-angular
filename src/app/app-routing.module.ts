import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { LoginComponent } from './login/login.component';
import { RegistreComponent } from './registre/registre.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ActiviteComponent } from './activite/activite.component';
import { HomeComponent } from './home/home.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArchiveComponent } from './archive/archive.component';
import { CommonModule } from '@angular/common'; 
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule }   from '@angular/forms';


const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'confirmation', component: ConfirmationComponent },
  { path: 'utilisateur', component: UtilisateurComponent },
  { path: 'login', component: LoginComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'registre', component: RegistreComponent },
  { path: 'gallery', component: GalleryComponent },
  {path: 'reservation', component: ReservationComponent},
  {path: 'archive', component: ArchiveComponent},
  {path: 'activite', component: ActiviteComponent},
  {path: '**', component: NotFoundComponent}
  
] ;

@NgModule({
  imports: [ RouterModule.forRoot(routes) , CommonModule, BrowserModule,FormsModule,ReactiveFormsModule],

  exports: [RouterModule],
  declarations: [
    ConfirmationComponent,
    UtilisateurComponent,
    ReservationComponent,
    ArchiveComponent,
    ActiviteComponent,
    HomeComponent
  ]
})
export class AppRoutingModule { 
  
}
class MyComponentModule {}
