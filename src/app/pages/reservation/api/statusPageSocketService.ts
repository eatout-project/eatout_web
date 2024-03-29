import {Injectable} from '@angular/core';
import {ReservationResponseApiObject} from "./reservation.api";
import {ReservationStore} from "../../../stores/reservationStore";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class StatusPageSocketService {

  // @ts-ignore
  webSocket: WebSocket;

  constructor(private reservationStore: ReservationStore) {
  }

  public start(customerId: number): void {
    this.connect(environment.STATUS_SOCKET_HOST_URL, customerId);
  }

  private connect(url: string, customerId: number): void {
    this.webSocket = new WebSocket(url);

    this.webSocket.onopen = (event: Event) => {
      this.webSocket.send(JSON.stringify(customerId));
      console.log('in the status socket');
    };

    this.webSocket.onmessage = (messageEvent: MessageEvent) => {
      const jsonReceived: any = messageEvent.data;
      console.log('websocket data received: ', jsonReceived)
      if (jsonReceived.includes('customerId')) {
        const reservationObj: ReservationResponseApiObject = JSON.parse(jsonReceived);
        this.reservationStore.updateReservationStatus(reservationObj);
      }
    };

    this.webSocket.onerror = (event: Event) => {
      console.error('WebSocket error observed: %o', event);
    };

    this.webSocket.onclose = (closeEvent: CloseEvent) => {
      console.info('WebSocket connection has been closed: %o', closeEvent);
    };
  }
}
