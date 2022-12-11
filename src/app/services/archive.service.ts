import { Injectable } from '@angular/core';
import { LocalStorageService } from "src/app/services/local-storage.service";


@Injectable({
  providedIn: 'root'
})
export class ArchiveService {


public archiveContent: any =[];

  constructor(

    private localStorageService: LocalStorageService
  ) {

    this.archiveContent = this.load();

   }


  load(){
   return this.localStorageService.get('archive');
  }

  clear(){
    this.archiveContent =[];
    this.localStorageService.set('archive', this.archiveContent);
  }
  // public get(){
  //   return this.archiveContent;

  // }
}
