import {Injectable} from "@angular/core";
import {EatoutHttpClient} from "../../../services/eatout-http-client";
import {map, Observable} from "rxjs";
import {Restaurant} from "../../../objects/businessObjects/Restaurant";
import {ReservationStatus} from "../../../enums/enums";

export interface ReservationApiObject {
  customerName: string;
  customerId: number;
  restaurantId: number;
  restaurantName: string;
  timeOfArrival: string;
  amountOfGuests: number;
  status: ReservationStatus;
}

@Injectable({
  providedIn: 'root'
})
export class ReservationApi {
  port = 5001;
  constructor(private readonly eatoutHttpClientService: EatoutHttpClient) {}

  createReservationRequest(reservation: ReservationApiObject): Observable<ReservationApiObject> {
    return this.eatoutHttpClientService.post<ReservationApiObject>(`${this.port}/createReservationRequest`, reservation)
      .pipe(map((result) => result));
  }

  getReservationResponse(): Observable<Restaurant[]> {
    return this.eatoutHttpClientService.get<ReservationApiObject>(`${this.port}/reservation/response`)
      .pipe(map((result) => this.reservationApiObjectToReservation(result)));
  }

  private reservationApiObjectToReservation(result: ReservationApiObject) {
    return [];
  }
}

