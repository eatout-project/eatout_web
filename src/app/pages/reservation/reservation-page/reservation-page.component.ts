import {Component, OnDestroy, OnInit} from '@angular/core';
import {CustomerStore} from "../../../stores/customer-store";
import {Customer} from "../../../objects/businessObjects/Customer";
import {Subject, take} from "rxjs";
import {FormBuilder} from "@angular/forms";
import {RestaurantStoreService} from "../../../restaurant-store.service";
import {ReservationFacade} from "../reservation.facade";
import {Router} from "@angular/router";
import {ReservationStatus} from "../../../enums/enums";
import {ReservationApiObject} from "../api/reservation.api";
import {ReservationStore} from "../../../stores/reservationStore";
import {Customer_accountService} from "../../account/customer_account.service";


@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.component.html',
  styleUrls: ['./reservation-page.component.scss']
})
export class ReservationPageComponent implements OnInit, OnDestroy {
  customer: Customer | undefined;
  format: number = 24;

  onDestroyed$ = new Subject<void>();

  constructor(
    private customerStore: CustomerStore,
    private restaurantStore: RestaurantStoreService,
    private reservationFacade: ReservationFacade,
    private router: Router,
    private formBuilder: FormBuilder,
    private reservationStore: ReservationStore,
    private accountService: Customer_accountService,
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

  today = new Date();

  reservationForm = this.formBuilder.group({
    name: '',
    amountOfGuests: 0,
    time: new Date(),
  })

  defaultOpenValue = this.today;

  ngOnInit(): void {
  }

  handleSubmit(): void {
    if(!(!!this.reservationForm.controls.time.value) || !(!!this.reservationForm.controls.name.value) || !(!!this.reservationForm.controls.amountOfGuests.value)) {
      alert('Empty fields!');
      return;
    }

    const customer: Customer | undefined = this.customerStore.getCustomerMapChanges();
    if (customer) {
      const customerId = customer.id;
      const customerName = this.reservationForm.controls.name.value;
      this.restaurantStore.getrestaurantMapChanges().pipe(take(1)).subscribe(restaurant => {
        const restaurantId = restaurant.id;
        const restaurantName = restaurant.name;
        // @ts-ignore
        const time = this.reservationForm.controls.time.value.getTime();
        const timeOfArrival = new Date();
        timeOfArrival.setTime(time)
        const amountOfGuests = this.reservationForm.controls.amountOfGuests.value ? this.reservationForm.controls.amountOfGuests.value : 0;
        // @ts-ignore
        this.reservationFacade.createReservation({customerId, customerName, restaurantId, restaurantName, timeOfArrival: JSON.stringify(timeOfArrival), amountOfGuests, status: ReservationStatus.WAITING})
          .pipe(take(1)).subscribe(response => {
          const reservation: ReservationApiObject = response;
          if (!reservation) {
            alert('could not create reservation request');
            this.reservationForm.reset();
            return;
          }
          this.reservationStore.storeReservation(reservation);
          this.router.navigate(['./statuspage']);
        })
      })
    } else {
      this.router.navigate([""]);
    }
  }

  ngOnDestroy() {
    this.onDestroyed$.complete();
  }
}
