import {Injectable} from '@angular/core';
import {ReservationApiObject} from "./reservation.api";

@Injectable({
  providedIn: 'root'
})
export class CreateReservationWebSocketService {
  // @ts-ignore
  private webSocket: WebSocket;

  constructor() {
  }

  public start(reservation: ReservationApiObject): void {
    if (this.webSocket === undefined) {
      console.debug('Going to connect to the websockets server');
      this.connect('ws://create-reservation-socket-cluster-ip-service:5010', reservation);
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
      this.webSocket.close();
      console.log('in the socket')
    };

    this.webSocket.onerror = (event: Event) => {
      console.error('WebSocket error observed: %o', event);
    };

    this.webSocket.onclose = (closeEvent: CloseEvent) => {
      console.info('WebSocket connection has been closed: %o', closeEvent);
    };
  }
}
