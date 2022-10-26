import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Restaurant} from "../../businessObjects/Restaurant";
import {RestaurantStoreService} from "../../restaurant-store.service";
import {Router} from "@angular/router";
import {addressTotring} from "../../businessObjects/Address";

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})

export class RestaurantComponent implements OnInit, OnDestroy {

  @Input() restaurant: Restaurant = {
    image: '',
    name: '',
    description: '',
    menu: {
      categories: []
    }
  };

  addressToString = addressTotring;

  constructor(private restaurantStoreService: RestaurantStoreService, private router: Router) {}

  ngOnInit(): void {
  }

  selectRestaurant(restaurant: Restaurant): void {
    console.log(restaurant)
    this.restaurantStoreService.storeSelctedrestaurant(restaurant);
    this.router.navigate(['./restaurantpage']);
  }

  ngOnDestroy(): void {
  }
}
