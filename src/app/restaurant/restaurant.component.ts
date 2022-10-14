import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Restaurant} from "../businessObjects/Restaurant";
import {RestaurantStoreService} from "../restaurant-store.service";
import {Router} from "@angular/router";

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
    categories: []
  };

  constructor(private restaurantStoreService: RestaurantStoreService, private router: Router) {}

  ngOnInit(): void {
    console.log(this.restaurant);
  }

  selectRestaurant(restaurant: Restaurant): void {
    this.restaurantStoreService.storeSelctedrestaurant(this.restaurant);
    this.router.navigate(['./restaurantpage']);
  }

  ngOnDestroy(): void {
  }
}
