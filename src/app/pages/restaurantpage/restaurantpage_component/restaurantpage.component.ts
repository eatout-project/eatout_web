import {Component, OnInit} from '@angular/core';
import {Restaurant} from "../../../objects/businessObjects/Restaurant";
import {RestaurantStoreService} from "../../../restaurant-store.service";
import {take} from "rxjs";

@Component({
  selector: 'app-restaurantpage',
  templateUrl: './restaurantpage.component.html',
  styleUrls: ['./restaurantpage.component.scss']
})
export class RestaurantpageComponent implements OnInit {

  restaurant: Restaurant | undefined;

  constructor(private restaurantStoreService: RestaurantStoreService) {}

  ngOnInit(): void {
    this.restaurantStoreService.getrestaurantMapChanges().pipe(take(1)).subscribe(restaurant => {
      this.restaurant = restaurant;
    });
  }

}
