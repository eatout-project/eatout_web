import {Injectable} from "@angular/core";
import {Restaurant} from "../../objects/businessObjects/Restaurant";
import {Observable} from "rxjs";
import {ReservationApi, ReservationApiObject} from "./api/reservation.api";

@Injectable()
export class ReservationFacade {
  constructor(
    private reservationApi: ReservationApi
  ) {
  }

  createReservation(reservationRequest: ReservationApiObject): Observable<ReservationApiObject> {
    return this.reservationApi.createReservationRequest(reservationRequest);
  }

  getReservationStatus(): Observable<Restaurant[]>{
    return this.reservationApi.getReservationResponse();
  }
}
