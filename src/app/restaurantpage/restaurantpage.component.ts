import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from "../businessObjects/Restaurant";
import {RestaurantStoreService} from "../restaurant-store.service";

@Component({
  selector: 'app-restaurantpage',
  templateUrl: './restaurantpage.component.html',
  styleUrls: ['./restaurantpage.component.scss']
})
export class RestaurantpageComponent implements OnInit {

  restaurant: Restaurant = {
    image: '',
    name: '',
    description: '',
    categories: []
  };

  constructor(private restaurantStoreService: RestaurantStoreService) {}

  ngOnInit(): void {
    this.restaurant = this.restaurantStoreService.getSelectedRestaurant();
  }

}
