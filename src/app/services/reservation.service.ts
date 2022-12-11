import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
 

  constructor( private http : HttpClient) { }

  /**
   * Get All reservations   
   */


   getReservations(){
    return this.http.get('/api/reservation')
   }

// /**
//  * 
//  * @param id : reservation id
//  */
//   get(reservation: any){

//     return this.http.get(this.apiUrl + '/' + reservation._id, reservation);
//   }
// /**
//  * 
//  * @param reservation new reservation to create
//  */
//   create(reservation: any ){

//     return this.http.post(this.apiUrl, reservation);

//   }
// /**
//  * 
//  * @param id  reservation id to update
//  * @param reservation new reservation data
//  */
//   update(reservation: any){

//     return this.http.put(this.apiUrl + '/' + reservation._id, reservation);
//   }
// /**
//  * 
//  * @param id reservation id to delete
//  */
//   delete(id: string){
//     return this.http.delete(this.apiUrl + '/' + id);

//   }
}
