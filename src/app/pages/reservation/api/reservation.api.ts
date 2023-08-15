import {Injectable} from "@angular/core";
import {EatoutHttpClient} from "../../../services/eatout-http-client";
import {map, Observable} from "rxjs";
import {ReservationStatus} from "../../../enums/enums";
import { environment } from './../../../../environments/environment';

export interface ReservationApiObject {
  customerName: string;
  customerId: number;
  restaurantId: number;
  restaurantName: string;
  timeOfArrival: string;
  amountOfGuests: number;
  status: ReservationStatus;
}

export interface ReservationResponseApiObject {
  id: number;
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
  url: string = environment.RESERVATION_SERVICE_HOST_URL;
  constructor(private readonly eatoutHttpClientService: EatoutHttpClient) {}

  createReservationRequest(reservation: ReservationApiObject): Observable<ReservationResponseApiObject> {
    return this.eatoutHttpClientService.post<ReservationResponseApiObject>(this.url + `/createReservationRequest`, reservation)
      .pipe(map((result) => result));
  }

  getReservationResponse(customerId: number): Observable<ReservationResponseApiObject[]> {
    console.log('customerId: ', customerId)
    return this.eatoutHttpClientService.post<ReservationResponseApiObject[]>(this.url + `/getReservations`, {id: customerId})
      .pipe(map((result) => result));
  }
}

