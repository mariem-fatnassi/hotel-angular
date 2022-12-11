import { Component, OnInit } from '@angular/core';
import { ArchiveService } from "src/app/services/archive.service";

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  public archiveContent: any = [];
  constructor( private archiveService: ArchiveService) { }

  ngOnInit() {
  }


  clearArchive(){
    this.archiveService.clear();
    this.ngOnInit();
  }
  

}
