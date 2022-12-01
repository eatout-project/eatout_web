import {Component, OnDestroy, OnInit} from '@angular/core';
import {ReservationStatus} from "../../enums/enums";
import {WebSocketsService} from "../reservation/api/websocket";
import {BehaviorSubject, Subject, take, takeUntil} from "rxjs";
import {ReservationStore} from "../../stores/reservationStore";
import {Customer_accountService} from "../account/customer_account.service";
import {Router} from "@angular/router";
import {Customer} from "../../objects/businessObjects/Customer";

@Component({
  selector: 'app-status-page',
  templateUrl: './status-page.component.html',
  styleUrls: ['./status-page.component.scss']
})
export class StatusPageComponent implements OnInit, OnDestroy {

  status = new BehaviorSubject<ReservationStatus>(ReservationStatus.WAITING);
  onDestroyed$ = new Subject<void>();

  constructor(
    private websocketService: WebSocketsService,
    private reservationStore: ReservationStore,
    private accountService: Customer_accountService,
    private router: Router
  ) {
    const storedCustomerString: string | null = localStorage.getItem('customer');
    if (!!storedCustomerString) {
      const customer: Customer = JSON.parse(storedCustomerString);
      this.accountService.verifyAccount(customer.id).pipe(take(1)).subscribe(verified => {
        if (!verified) {
          localStorage.setItem('customer', '');
          this.router.navigate(['']);
        }
      })
    } else {
      this.router.navigate(['']);
    }
  }

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
