import {Injectable} from "@angular/core";
import {Observable, ReplaySubject} from "rxjs";
import {ReservationApiObject} from "../pages/reservation/api/reservation.api";

@Injectable({
  providedIn: 'root'
})
export class ReservationStore {
  private reservationMapSource = new ReplaySubject<ReservationApiObject>(1);
  private reservationMap$ = this.reservationMapSource.asObservable();

  constructor() {
  }

  public storeReservation(reservation: ReservationApiObject): void {
    this.reservationMapSource.next(reservation);
  }

  public getReservationMapChanges(): Observable<ReservationApiObject> {
    return this.reservationMap$;
  }
}
