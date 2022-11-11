import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {ReservationStatus} from "../../../enums/enums";
import {ReservationApiObject} from "./reservation.api";
import {ReservationStore} from "../../../services/reservationStore";

@Injectable({
  providedIn: 'root'
})
export class WebSocketsService {
  // @ts-ignore
  private webSocket: WebSocket;

  private responseSubject: Subject<ReservationStatus>;

  constructor(private reservationStore: ReservationStore) {
    this.responseSubject = new Subject<any>();
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

  public getStatusChanges(): Observable<ReservationStatus> {
    return this.responseSubject;
  }

  private connect(partialUrl: string, reservation: ReservationApiObject): void {
    this.webSocket = new WebSocket(partialUrl);

    this.webSocket.onopen = (event: Event) => {
      console.info('WebSocket connection has been opened: %o', event);
      this.webSocket.send(JSON.stringify(reservation));
    };

    this.webSocket.onmessage = (messageEvent: MessageEvent) => {
      console.log(typeof messageEvent.data);
      const jsonReceived: string = messageEvent.data;
      console.log(jsonReceived)
      if (jsonReceived.includes('customerId')) {
        const response: ReservationApiObject = JSON.parse(jsonReceived);
        this.reservationStore.storeReservation(response);
        console.log('response: ', response);
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
