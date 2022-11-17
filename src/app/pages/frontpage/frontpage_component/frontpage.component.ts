import {Component, OnInit} from '@angular/core';
import {RestaurantSearchFacade} from "../../../restaurant_search/restaurant-search.facade";
import {Restaurant} from "../../../objects/businessObjects/Restaurant";
import {BehaviorSubject, Observable, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss']
})

export class FrontpageComponent implements OnInit {
  topics: string[] = ['Indian', 'Mexican', 'Danish', 'Sri Lankan', 'American', 'Iranian', 'Russian', 'Chinese'];
  restaurants: Observable<Restaurant[]>;
  found: Subject<boolean> = new BehaviorSubject<boolean>(false);
  private onDestroyed$ = new Subject();

  constructor(
    private restaurantSearchFacade: RestaurantSearchFacade,
  ) {
    this.restaurants = this.restaurantSearchFacade.getBrowsingList();
    this.restaurants.pipe(takeUntil(this.onDestroyed$)).subscribe(restaurants => {
      if (restaurants.length > 0) {
        this.found.next(true);
      }
    })

  }

  ngOnInit(): void {}

}
