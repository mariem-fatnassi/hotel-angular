import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; 
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule ,ReactiveFormsModule}   from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RegistreComponent } from './registre/registre.component';
import { AccueilComponent } from './accueil/accueil.component';



const routes: Routes = [] ;
@NgModule({
  
  declarations: [
    AppComponent,
    NotFoundComponent,
    LoginComponent,
    GalleryComponent,
    RegistreComponent,
    AccueilComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ], 
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
