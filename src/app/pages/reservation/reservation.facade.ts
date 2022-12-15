import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ReservationApi, ReservationApiObject, ReservationResponseApiObject} from "./api/reservation.api";

@Injectable()
export class ReservationFacade {
  constructor(
    private reservationApi: ReservationApi
  ) {
  }

  createReservation(reservationRequest: ReservationApiObject): Observable<ReservationResponseApiObject> {
    return this.reservationApi.createReservationRequest(reservationRequest);
  }
}
