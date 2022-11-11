import {Injectable} from "@angular/core";
import {RestaurantSearchApi} from "./api/restaurant-search.api";
import {Restaurant} from "../objects/businessObjects/Restaurant";
import {Observable} from "rxjs";

@Injectable()
export class RestaurantSearchFacade {
  constructor(
    private restaurantsSearchApi: RestaurantSearchApi
  ) {
  }

  getBrowsingList(): Observable<Restaurant[]>{
    return this.restaurantsSearchApi.getRestaurants();
  }
}
