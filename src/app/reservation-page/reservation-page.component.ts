import {Component, EventEmitter, OnInit} from '@angular/core';
import {CustomerStore} from "../customer/customer-store";
import {Customer} from "../businessObjects/Customer";
import {Subject, take, takeUntil} from "rxjs";
import {FormBuilder} from "@angular/forms";

export interface reservationApiObject {
  name: string,
  amountOfGuests: number,
  date: string,
  time: string
}

@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.component.html',
  styleUrls: ['./reservation-page.component.scss']
})
export class ReservationPageComponent implements OnInit {
  customer: Customer | undefined;
  format: number = 24;

  timeEvent: EventEmitter<string> = new EventEmitter<string>();
  onDestroyed$ = new Subject<void>();

  constructor(private customerStore: CustomerStore, private formBuilder: FormBuilder) {}

  reservationForm = this.formBuilder.group({
    name: [''],
    amountOfGuests: [],
    date: [],
    time: []
  })

  ngOnInit(): void {
    this.customerStore.getCustomerMapChanges().pipe(take(1))
      .subscribe(customer => {
        this.customer = customer
      });
    this.timeEvent.pipe(takeUntil(this.onDestroyed$))
      .subscribe(value => {
        console.log(value);
      })
  }

  handleSubmit(): void {

  }

  timeChange($event: Event) {
    console.log(this.reservationForm.get('date')?.value);
    console.log(this.reservationForm.get('time')?.value);
  }
}
