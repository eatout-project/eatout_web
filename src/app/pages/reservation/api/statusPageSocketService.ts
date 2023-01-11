import {Injectable} from '@angular/core';
import {ReservationResponseApiObject} from "./reservation.api";
import {ReservationStore} from "../../../stores/reservationStore";

@Injectable({
  providedIn: 'root'
})
export class StatusPageSocketService {

  // @ts-ignore
  webSocket: WebSocket;

  constructor(private reservationStore: ReservationStore) {
  }

  public start(customerId: number): void {
    this.connect('ws://localhost:5013', customerId);
  }

  private connect(partialUrl: string, customerId: number): void {
    this.webSocket = new WebSocket(partialUrl);

    this.webSocket.onopen = (event: Event) => {
      this.webSocket.send(JSON.stringify(customerId));
      console.log('in the socket')
    };

    this.webSocket.onmessage = (messageEvent: MessageEvent) => {
      const jsonReceived: any = messageEvent.data;
      console.log('websocket data received: ', jsonReceived)
      if (jsonReceived.includes('customerId')) {
        const reservationObj: ReservationResponseApiObject = JSON.parse(jsonReceived);
        console.log('includes customerID: ', reservationObj)
        this.reservationStore.storeReservation(reservationObj);
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
