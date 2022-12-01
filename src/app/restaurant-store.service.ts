import {Injectable} from '@angular/core';
import {Restaurant} from "./objects/businessObjects/Restaurant";
import {Observable, ReplaySubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RestaurantStoreService {
  private restaurantMapSource = new ReplaySubject<Restaurant>(1);
  private restaurantMap$ = this.restaurantMapSource.asObservable();

  constructor() {}

  public storeSelctedrestaurant(restaurant: Restaurant): void {
    this.restaurantMapSource.next(restaurant);
  }

  public getrestaurantMapChanges(): Observable<Restaurant> {
    return this.restaurantMap$;
  }
}
