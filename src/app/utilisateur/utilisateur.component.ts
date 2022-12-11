import { Component, OnInit } from '@angular/core';
// import utilisateurs from '../utilisateurs-list';
// import { Utilisateur } from '../utilisateur.model';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
 
  myVar : any = [];


  constructor(
    private service : UserService
  ) { }

  ngOnInit() {
    this.getDataFrompAPI();
  } 

  getDataFrompAPI(){
    this.service.getUsers().subscribe((response) => {

      this.myVar = response; 
      // console.log('Response  from API is ' , response)



    }, (error) => {
      console.log('Error is ' , error);
    })
  }

}



