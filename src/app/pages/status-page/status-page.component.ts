import {Component, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, Subject, take, takeUntil} from "rxjs";
import {ReservationStore} from "../../stores/reservationStore";
import {Customer_accountService} from "../account/customer_account.service";
import {Router} from "@angular/router";
import {Customer} from "../../objects/businessObjects/Customer";
import {ReservationApi, ReservationResponseApiObject} from "../reservation/api/reservation.api";
import {StatusPageSocketService} from "../reservation/api/statusPageSocketService";

@Component({
  selector: 'app-status-page',
  templateUrl: './status-page.component.html',
  styleUrls: ['./status-page.component.scss']
})
export class StatusPageComponent implements OnInit, OnDestroy {

  reservations = new BehaviorSubject<ReservationResponseApiObject[]>([]);
  onDestroyed$ = new Subject<void>();
  customerId: number;

  constructor(
    private websocketService: StatusPageSocketService,
    private reservationStore: ReservationStore,
    private accountService: Customer_accountService,
    private router: Router,
    private api: ReservationApi,
  ) {
    const storedCustomerString: string | null = localStorage.getItem('customer');
    // @ts-ignore
    const customer: Customer = JSON.parse(storedCustomerString);
    this.customerId = customer.id;
    if (!!storedCustomerString) {
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
    this.api.getReservationResponse(this.customerId).pipe(take(1)).subscribe((reservations: ReservationResponseApiObject[]) => {
      this.reservations.next(reservations);
      this.websocketService.start(this.customerId);
    })
    this.reservationStore.getReservationMapChanges().pipe(takeUntil(this.onDestroyed$)).subscribe(reservations => {
      this.reservations.next(reservations);
    })
  }

  ngOnDestroy() {
    this.onDestroyed$.complete();
  }
}
