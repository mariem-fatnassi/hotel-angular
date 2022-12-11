import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from "src/app/services/confirmation.service"

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  public confirmContent : any = [];

  constructor(
    private confirmationService: ConfirmationService

  ) { }

  ngOnInit(): void {
    this.confirmContent =  this.confirmationService.confirmContent;
    for(let index = 0; index < this.confirmContent.length; index++){
      
    }
  }

  clearConfirmation(){
    this.confirmationService.clear();
    this.ngOnInit();
  }

}
