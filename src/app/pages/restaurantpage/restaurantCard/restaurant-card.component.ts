import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Restaurant} from "../../../objects/businessObjects/Restaurant";
import {RestaurantStoreService} from "../../../restaurant-store.service";
import {Router} from "@angular/router";
import {addressTotring} from "../../../objects/businessObjects/Address";

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.scss']
})

export class RestaurantCardComponent implements OnInit, OnDestroy {

  @Input() restaurant: Restaurant | undefined = undefined;

  addressToString = addressTotring;

  constructor(private restaurantStoreService: RestaurantStoreService, private router: Router) {}

  ngOnInit(): void {
  }

  goToRestaurantPage(restaurant: Restaurant): void {
    this.restaurantStoreService.storeSelctedrestaurant(restaurant);
    this.router.navigate(['./restaurantpage']);
  }

  goToReservationPage(restaurant: Restaurant) {
    this.restaurantStoreService.storeSelctedrestaurant(restaurant);
    this.router.navigate(['./reservationpage']);
  }

  ngOnDestroy(): void {
  }

}
