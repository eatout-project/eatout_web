import {Component, EventEmitter, OnInit} from '@angular/core';
import {CustomerStore} from "../../customer/customer-store";
import {Customer} from "../../businessObjects/Customer";
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
  selectedTime: string | undefined;

  timeEvent: EventEmitter<string> = new EventEmitter<string>();
  onDestroyed$ = new Subject<void>();

  constructor(private customerStore: CustomerStore, private formBuilder: FormBuilder) {}

  today = new Date();
  month = this.today.getMonth();
  year = this.today.getFullYear();
  day = this.today.getDay();
  hour = this.today.getHours();
  minutes = this.today.getMinutes();
  time: Date = new Date();

  reservationForm = this.formBuilder.group({
    name: [''],
    amountOfGuests: [],
    date: new Date(this.year, this.month, this.day),
    time: new Date(this.year, this.month, this.day, this.hour, this.minutes + 15),
  })

  defaultOpenValue = this.today;

  ngOnInit(): void {
    this.customerStore.getCustomerMapChanges().pipe(take(1))
      .subscribe(customer => {
        this.customer = customer
      });
    this.timeEvent.pipe(takeUntil(this.onDestroyed$))
      .subscribe(value => {
        console.log(value);
      })
    this.reservationForm.valueChanges.pipe(takeUntil(this.onDestroyed$))
      .subscribe(value => {
        if (value.time) {
          console.log(value);
        }
      })
  }

  handleSubmit(): void {
    if(!this.reservationForm.controls.time.value || !this.reservationForm.controls.date || this.reservationForm.controls.name || !this.reservationForm.controls.amountOfGuests) {
      alert('Empty fields!');
      return;
    }
  }
}
