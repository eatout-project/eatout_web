import {Component, OnDestroy, OnInit} from '@angular/core';
import {CustomerStore} from "../../../customer/customer-store";
import {Customer} from "../../../objects/businessObjects/Customer";
import {Subject, take} from "rxjs";
import {FormBuilder} from "@angular/forms";
import {RestaurantStoreService} from "../../../restaurant-store.service";
import {ReservationFacade} from "../reservation.facade";
import {Router} from "@angular/router";
import {ReservationStatus} from "../../../enums/enums";
import {ReservationApiObject} from "../api/reservation.api";
import {ReservationStore} from "../../../services/reservationStore";


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
    private reservationStore: ReservationStore
    ) {

  }

  today = new Date();
  month = this.today.getMonth();
  year = this.today.getFullYear();
  day = this.today.getDay();
  hour = this.today.getHours();
  minutes = this.today.getMinutes();
  time: Date = new Date();

  reservationForm = this.formBuilder.group({
    name: '',
    amountOfGuests: 0,
    time: new Date(this.year, this.month, this.day),
  })

  defaultOpenValue = this.today;

  ngOnInit(): void {
    this.customerStore.getCustomerMapChanges().pipe(take(1))
      .subscribe(customer => {
        this.customer = customer
      });
  }

  handleSubmit(): void {
    if(!(!!this.reservationForm.controls.time.value) || !(!!this.reservationForm.controls.name.value) || !(!!this.reservationForm.controls.amountOfGuests.value)) {
      alert('Empty fields!');
    } else {
      this.customerStore.getCustomerMapChanges().pipe(take(1)).subscribe(customer => {
        const customerId = customer.id;
        const customerName = this.reservationForm.controls.name.value;
        this.restaurantStore.getrestaurantMapChanges().pipe(take(1)).subscribe(restaurant => {
          const restaurantId = restaurant.id;
          console.log(restaurantId);
          const restaurantName = restaurant.name;
          // @ts-ignore
          const time = this.reservationForm.controls.time.value.getTime();
          const timeOfArrival = new Date();
          timeOfArrival.setTime(time)
          const amountOfGuests = this.reservationForm.controls.amountOfGuests.value ? this.reservationForm.controls.amountOfGuests.value : 0;
          const finalTimeString = `${timeOfArrival.getHours()}:${timeOfArrival.getMinutes()}`;
          // @ts-ignore
          this.reservationFacade.createReservation({customerId, customerName, restaurantId, restaurantName, timeOfArrival: finalTimeString, amountOfGuests, status: ReservationStatus.WAITING})
            .pipe(take(1)).subscribe(response => {
              const reservation: ReservationApiObject = response;
            if (reservation) {
              this.reservationStore.storeReservation(reservation);
              this.router.navigate(['./statuspage']);
            } else {
              alert('could not create reservation request');
              this.reservationForm.reset();
              return;
            }
          })
        })
      })
    }
  }

  ngOnDestroy() {
    this.onDestroyed$.complete();
  }
}
