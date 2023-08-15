import {Injectable} from '@angular/core';
import {ReservationApiObject} from "./reservation.api";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CreateReservationWebSocketService {
  private webSocket: WebSocket | undefined;

  constructor() {
  }

  public start(reservation: ReservationApiObject): void {
    if (this.webSocket === undefined) {
      console.log('Going to connect to the CreateReservationWebSocketService server');
      this.connect(environment.CREATE_RESERVATION_SOCKET_HOST_URL, reservation);
    }
  }

  public stop(): void {
    if (this.webSocket) {
      console.log('stopping CreateReservationWebSocketService ')
      this.webSocket.close();
    }
  }

  private connect(partialUrl: string, reservation: ReservationApiObject): void {
    this.webSocket = new WebSocket(partialUrl);

    this.webSocket.onopen = (event: Event) => {
      console.log('in the CreateReservationWebSocketService socket')
      // @ts-ignore
      this.webSocket.send(JSON.stringify(reservation));

      console.log('Message sent: stopping CreateReservationWebSocketService socket')
      this.stop();
    };

    this.webSocket.onerror = (event: Event) => {
      console.error('WebSocket error observed in CreateReservationWebSocketService: %o', event);
    };

    this.webSocket.onclose = (closeEvent: CloseEvent) => {
      console.info('CreateReservationWebSocketService connection has been closed: %o', closeEvent);
      this.webSocket = undefined;
    };
  }
}
