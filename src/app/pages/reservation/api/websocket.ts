import {Injectable} from '@angular/core';
import {ReservationApiObject} from "./reservation.api";
import {ReservationStore} from "../../../stores/reservationStore";

@Injectable({
  providedIn: 'root'
})
export class WebSocketsService {
  // @ts-ignore
  private webSocket: WebSocket;

  constructor(private reservationStore: ReservationStore) {
  }

  public start(reservation: ReservationApiObject): void {
    if (this.webSocket === undefined) {
      console.debug('Going to connect to the websockets server');
      this.connect('ws://localhost:5010', reservation);
    }
  }

  public stop(): void {
    if (this.webSocket != null) {
      this.webSocket.close();
    }
  }

  private connect(partialUrl: string, reservation: ReservationApiObject): void {
    this.webSocket = new WebSocket(partialUrl);

    this.webSocket.onopen = (event: Event) => {
      this.webSocket.send(JSON.stringify(reservation));
    };

    this.webSocket.onmessage = (messageEvent: MessageEvent) => {
      const jsonReceived: string = messageEvent.data;
      if (jsonReceived.includes('customerId')) {
        const reservation: ReservationApiObject = JSON.parse(jsonReceived);
        this.reservationStore.storeReservation(reservation);
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
