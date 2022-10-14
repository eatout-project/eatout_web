import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-restaurantbanner',
  templateUrl: './restaurantbanner.component.html',
  styleUrls: ['./restaurantbanner.component.scss']
})
export class RestaurantbannerComponent implements OnInit {

  @Input() restaurantImage: string = '';

  constructor() { }

  ngOnInit(): void {
    console.log(this.restaurantImage);
  }

}
