import {Injectable} from "@angular/core";
import {EatoutHttpClient} from "../../services/eatout-http-client";
import {map, Observable} from "rxjs";
import {Restaurant} from "../../businessObjects/Restaurant";
import {Category} from "../../businessObjects/Category";
import {Menu} from "../../businessObjects/Menu";
import {CategoryItem} from "../../businessObjects/CategoryItem";
import {Address} from "../../businessObjects/Address";

interface RestaurantApiObject {
  name: string;
  description: string;
  menu: RestaurantMenuApiObject;
  address: RestaurantAddressApiObject;
}

export interface RestaurantMenuApiObject {
  categories: RestaurantMenuCategoryApiObject[]
}

export interface RestaurantMenuCategoryApiObject {
  title: string;
  items: RestaurantMenuCategoryItemApiObject[]
}

export interface RestaurantMenuCategoryItemApiObject {
  name: string,
  description: string,
  price: number,
  image: string
}

export interface RestaurantAddressApiObject {
  streetName: string,
  houseNumber: string,
  zipCode: number,
  city: string,
  floor?: number,
}

@Injectable({
  providedIn: 'root'
})
export class RestaurantSearchApi {
  constructor(private readonly eatoutHttpClientService: EatoutHttpClient) {}

  getRestaurants(): Observable<Restaurant[]> {
    return this.eatoutHttpClientService.get<RestaurantApiObject[]>('browsingList')
      .pipe(map((result) => this.restaurantApiObjectToRestaurant(result)));
  }

  private restaurantApiObjectToRestaurant(result: RestaurantApiObject[]): Restaurant[] {
    const restaurants: Restaurant[] = [];
    result.forEach((restaurant) => {
      const menu = this.restaurantMenuApiObjectToRestaurantMenu(restaurant.menu);
      const address = this.restaurantAddressApiObjectToRestaurantAddress(restaurant.address);
      restaurants.push({
        image: '../../../assets/restaurants/mogens.jpg',
        name: restaurant.name,
        description: restaurant.description,
        menu,
        address
      })
    })
    console.log(restaurants)
    return restaurants;
  }

  private restaurantMenuApiObjectToRestaurantMenu(menuApiObject: RestaurantMenuApiObject): Menu {
    return {
      categories: this.restaurantMenuCategoryApiObjectToRestaurantMenuCategory(menuApiObject.categories)
    }
  }

  private restaurantMenuCategoryApiObjectToRestaurantMenuCategory(categoriesApiObject: RestaurantMenuCategoryApiObject[]): Category[] {
    const restaurantCategories: Category[] = [];
    categoriesApiObject.forEach((restaurantMenuCategory: RestaurantMenuCategoryApiObject) => {
      restaurantCategories.push({
        title: restaurantMenuCategory.title,
        items: this.restaurantMenuCategoryItemApiObjectToRestaurantMenuCategoryItem(restaurantMenuCategory.items)
      })
    });
    return restaurantCategories;
  }

  private restaurantMenuCategoryItemApiObjectToRestaurantMenuCategoryItem(categoryItems: RestaurantMenuCategoryItemApiObject[]): CategoryItem[] {
    const restaurantCategoryItems: CategoryItem[] = [];
    categoryItems.forEach((restaurantMenuCategoryItem: RestaurantMenuCategoryItemApiObject) => {
      restaurantCategoryItems.push({
        name: restaurantMenuCategoryItem.name,
        description: restaurantMenuCategoryItem.description,
        price: restaurantMenuCategoryItem.price,
        image: restaurantMenuCategoryItem.image
      })
    });
    return restaurantCategoryItems;
  }

  private restaurantAddressApiObjectToRestaurantAddress(address: RestaurantAddressApiObject): Address {
    let restaurantAddress: Address;
    const city: string = address.city;
    const houseNumber: string = address.houseNumber;
    const zipCode: number = address.zipCode;
    const streetName: string = address.streetName;

    restaurantAddress = {
      city,
      houseNumber,
      zipCode,
      streetName
    }

    return restaurantAddress
  }
}
