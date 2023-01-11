import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable, take} from "rxjs";
import {ReservationResponseApiObject} from "../pages/reservation/api/reservation.api";

@Injectable({
  providedIn: 'root'
})
export class ReservationStore {
  private reservationMapSource = new BehaviorSubject<ReservationResponseApiObject[]>([]);
  private reservationMap$ = this.reservationMapSource.asObservable();

  constructor() {
  }

  public storeReservation(reservation: ReservationResponseApiObject): void {
    console.log('new reservation: ', reservation);
    this.getReservationMapChanges().pipe(take(1)).subscribe(reservations => {
      console.log('stored reservations: ', reservations)
      if (reservations.length) {
        console.log('length is true')
        reservations.forEach((storedReservation, index) => {
          if (storedReservation.id === reservation.id) {
            reservations[index] = reservation;
          }
        })
      } else {
        reservations.push(reservation);
      }
      console.log('reservations: ', reservations);
      this.reservationMapSource.next(reservations);
    })
  }

  public storeReservations(reservations2: ReservationResponseApiObject[]): void {
    console.log('new reservation: ', reservations2);
    this.getReservationMapChanges().pipe(take(1)).subscribe(reservations => {
      console.log('stored reservations: ', reservations)
      if (reservations.length) {
        console.log('length is true')
        for (let i = 0; i <reservations.length; i++) {
          for (let j = 0; j < reservations2.length; j++) {
            const storedReservation = reservations[i];
            const newReservation = reservations2[j];
            if (storedReservation.id === newReservation.id) {
              reservations[i] = newReservation;
            }
          }
        }
      } else {
        reservations2.forEach(reservation => {
          reservations.push(reservation);
        })
      }
      console.log('reservations: ', reservations);
      this.reservationMapSource.next(reservations);
    })
  }

  public getReservationMapChanges(): Observable<ReservationResponseApiObject[]> {
    return this.reservationMap$;
  }
}
