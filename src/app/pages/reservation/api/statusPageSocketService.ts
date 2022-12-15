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
    this.connect('ws://status-socket-cluster-ip-service:5013', customerId);
  }

  private connect(partialUrl: string, customerId: number): void {
    this.webSocket = new WebSocket(partialUrl);

    this.webSocket.onopen = (event: Event) => {
      this.webSocket.send(JSON.stringify(customerId));
      console.log('in the socket')
    };

    this.webSocket.onmessage = (messageEvent: MessageEvent) => {
      const jsonReceived: string = messageEvent.data;
      if (jsonReceived.includes('customerId')) {
        const reservationObj: ReservationResponseApiObject = JSON.parse(jsonReceived);
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
