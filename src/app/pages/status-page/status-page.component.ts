import {Component, OnDestroy, OnInit} from '@angular/core';
import {ReservationStatus} from "../../enums/enums";
import {WebSocketsService} from "../reservation/api/websocket";
import {BehaviorSubject, Subject, take, takeUntil} from "rxjs";
import {ReservationStore} from "../../services/reservationStore";

@Component({
  selector: 'app-status-page',
  templateUrl: './status-page.component.html',
  styleUrls: ['./status-page.component.scss']
})
export class StatusPageComponent implements OnInit, OnDestroy {

  public status = new BehaviorSubject<ReservationStatus>(ReservationStatus.WAITING);
  onDestroyed$ = new Subject<void>();

  constructor(private websocketService: WebSocketsService, private reservationStore: ReservationStore) { }

  ngOnInit(): void {
    this.reservationStore.getReservationMapChanges().pipe(take(1)).subscribe(reservation => {
      this.websocketService.start(reservation);
      this.reservationStore.getReservationMapChanges().pipe(takeUntil(this.onDestroyed$)).subscribe(reservation => {
        this.status.next(reservation.status);
      })
    })
  }

  ngOnDestroy() {
    this.websocketService.stop();
    this.onDestroyed$.complete();
  }

}
