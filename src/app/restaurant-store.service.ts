import { Injectable } from '@angular/core';
import {Restaurant} from "./businessObjects/Restaurant";

@Injectable({
  providedIn: 'root'
})
export class RestaurantStoreService {

  restaurant: Restaurant = {
    image: '',
    name: '',
    description: '',
    menu: {
      categories: []
    }
  }

  constructor() { }

  storeSelctedrestaurant(restaurant: Restaurant): void {
    this.restaurant = restaurant;
  }

  getSelectedRestaurant(): Restaurant {
    return this.restaurant;
  }
}
