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

  public updateReservationStatus(reservation: ReservationResponseApiObject): void {
    console.log('updateReservationStatus(): ', reservation);
    this.getReservationMapChanges().pipe(take(1)).subscribe(reservations => {

      reservations.forEach((storedReservation, index) => {
        if (storedReservation.id === reservation.id) {
          reservations[index] = reservation;
        }
      })

      this.reservationMapSource.next(reservations);
    })
  }

  public storeReservations(reservations2: ReservationResponseApiObject[]): void {
    this.reservationMapSource.next(reservations2);
  }

  public getReservationMapChanges(): Observable<ReservationResponseApiObject[]> {
    return this.reservationMap$;
  }
}
