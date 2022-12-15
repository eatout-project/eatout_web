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
    this.reservationMap$.pipe(take(1)).subscribe(reservations => {
      reservations.forEach((storedReservation, index) => {
        if (storedReservation.id === reservation.id) {
          reservations[index] = reservation;
        }
      })
      this.reservationMapSource.next(reservations);
    })
  }

  public getReservationMapChanges(): Observable<ReservationResponseApiObject[]> {
    return this.reservationMap$;
  }
}
