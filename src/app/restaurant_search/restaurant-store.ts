import {Injectable} from "@angular/core";
import {Observable, ReplaySubject} from "rxjs";
import {RestaurantSearchApi} from "./api/restaurant-search.api";
import {Restaurant} from "../businessObjects/Restaurant";

@Injectable({
  providedIn: 'root'
})
export class RestaurantStore {
  private restaurantMapSource = new ReplaySubject<Restaurant[]>(1);
  private restaurantMap$ = this.restaurantMapSource.asObservable();

  constructor(private restaurantApi: RestaurantSearchApi) {
    this.refresh();
  }

  public refresh(): void {
    this.restaurantApi.getRestaurants().subscribe((result) => {
      this.restaurantMapSource.next(result);
    })
  }

  public getRestaurantMapChanges(): Observable<Restaurant[]> {
    return this.restaurantMap$;
  }
}
