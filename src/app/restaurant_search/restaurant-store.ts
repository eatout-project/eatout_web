import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {Restaurant} from "../objects/businessObjects/Restaurant";
import {RestaurantSearchFacade} from "./restaurant-search.facade";

@Injectable({
  providedIn: 'root'
})
export class RestaurantStore {
  private restaurantMapSource = new BehaviorSubject<Restaurant[]>([]);
  private restaurantMap$ = this.restaurantMapSource.asObservable();

  constructor(private restaurantSearchFacade: RestaurantSearchFacade) {
    this.refresh();
  }

  public refresh(): void {
    this.restaurantSearchFacade.getBrowsingList().subscribe((result) => {
      this.restaurantMapSource.next(result);
    })
  }

  public getRestaurantMapChanges(): Observable<Restaurant[]> {
    return this.restaurantMap$;
  }
}
