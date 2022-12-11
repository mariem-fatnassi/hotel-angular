import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/services/reservation.service'
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html', 
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  myVar : any = [];


  constructor(
    private service : ReservationService
  ) { }

  ngOnInit() {
    this.getDataFrompAPI();
  } 

  getDataFrompAPI(){
    this.service.getReservations().subscribe((response) => {

      this.myVar = response; 
      // console.log('Response  from API is ' , response)



    }, (error) => {
      console.log('Error is ' , error);
    })
  }

//   ajouter(formObj: Reservation ){
//     this.reservationService.create(formObj).subscribe((response)=>{
//       this.getLatestReservation();

      
//      }
     
//      );}

//      supprimer(reservation: any){
// this.reservationService.delete(reservation).subscribe(()=>{
//   this.getLatestReservation();
// });
//      }
//      modifier(reservation: Reservation){
//          this.reservationObj = reservation;
//      }

//      getLatestReservation(){
//        this.reservationService.all().subscribe((response)=>{
//          this.reservationslist = response
//        });
//      }

//      getReservation(reservation: Reservation){
//        this.reservationService.get(reservation).subscribe((response)=>{
//          this.getLatestReservation();
//          this.reserv=reservation;
//        });
//      }
  
// updateReservation(){
//   this.reservationService.update(this.reservationObj).subscribe(()=>{
//     this.getLatestReservation();

//     console.log(this.reservationService)
//   })
// }

// //this.archiveContent = this.archiveService.get();
// //console.log(this.reservationslist)


//   public addToArchive(id: string): void {


//     this.archiveService.add(id);

//    // this.archiveContent.filter(elem => elem.id == id)[0] ? this.archiveContent.filter(elem => elem.id)[0].sortie ++ : this.archiveContent.push({id: id, sortie:1});
 
// // if(!this.archiveContent.filter(elem => elem.id == id)[0])
// // this.archiveContent.push({id: id, sortie: true});


// }

// compterTotalPersonnes(){
//   // for(let index=0; index<this.reservationslist.length; index++){
//   //    this.totalPersonnes = this.reservationslist[index].nbradultes + this.reservationslist[index].nbrenfants;
//   //  }

//   this.reservationslist.forEach((item: { nbrenfants: number; nbradultes: number;})=>{

//      this.totalPersonnes = item.nbrenfants + item.nbradultes;
//    }

//    );
// }

}
