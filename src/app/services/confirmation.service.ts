import { Injectable } from '@angular/core';
import { LocalStorageService } from "src/app/services/local-storage.service"


@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {


  public confirmContent : any = [];

  constructor(

    private localStorageService: LocalStorageService
  ) {

    this.confirmContent = this.load();

  }

  add(confirmationId? : String){
    

  }
  load(){
    return this.localStorageService.get('confirm')
  }

  clear(){
    this.confirmContent =[];
    this.localStorageService.set('confirm', this.confirmContent);
  }
  // public get(){
  // return this.cartContent;
  // }
}
