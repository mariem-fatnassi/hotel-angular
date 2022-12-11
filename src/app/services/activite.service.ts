import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
  })

export class ActiviteService {
    constructor( private http : HttpClient) { }


    getActivite(){
        return this.http.get('/api/activites')
       }
}