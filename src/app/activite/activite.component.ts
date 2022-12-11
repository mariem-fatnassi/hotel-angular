import { Component, OnInit } from '@angular/core';
import { ActiviteService } from '../services/activite.service';

@Component({
  selector: 'app-activite',
  templateUrl: './activite.component.html',
  styleUrls: ['./activite.component.css']
})
export class ActiviteComponent implements OnInit {

  myVar : any = [];


  constructor(
    private service : ActiviteService
  ) { }

  ngOnInit() {
    this.getDataFrompAPI();
  } 

  getDataFrompAPI(){
    this.service.getActivite().subscribe((response) => {

      this.myVar = response; 
      // console.log('Response  from API is ' , response)



    }, (error) => {
      console.log('Error is ' , error);
    })
  }

}
