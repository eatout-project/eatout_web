import {Component, Input, OnInit} from '@angular/core';
import {Category} from "../businessObjects/Category";

@Component({
  selector: 'app-restaurant-description-area',
  templateUrl: './restaurant-description-area.component.html',
  styleUrls: ['./restaurant-description-area.component.scss']
})
export class RestaurantDescriptionAreaComponent implements OnInit {

  @Input() restaurantName: string = '';
  @Input() restaurantDescription: string = '';
  @Input() menuCategories: Category[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
