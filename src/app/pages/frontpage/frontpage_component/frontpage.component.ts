import {Component, OnInit} from '@angular/core';
import {RestaurantSearchFacade} from "../../../restaurant_search/restaurant-search.facade";
import {Restaurant} from "../../../objects/businessObjects/Restaurant";
import {BehaviorSubject, Observable, Subject, take, takeUntil} from "rxjs";
import {Customer_accountService} from "../../landingspage/customer_account.service";
import {Customer} from "../../../objects/businessObjects/Customer";
import {Router} from "@angular/router";
import {RestaurantStore} from "../../../restaurant_search/restaurant-store";

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss']
})

export class FrontpageComponent implements OnInit {
  topics: string[] = ['Indian', 'Mexican', 'Danish', 'Sri Lankan', 'American', 'Iranian', 'Russian', 'Chinese'];
  restaurantList: Observable<Restaurant[]>;
  // restaurantList: BehaviorSubject<Restaurant[]> = new BehaviorSubject([
  //   {
  //     id: 1,
  //     name: 'string',
  //     description: "string",
  //   }
  // ]);
  found: Subject<boolean> = new BehaviorSubject<boolean>(false);
  private onDestroyed$ = new Subject();

  constructor(
    private restaurantSearchFacade: RestaurantSearchFacade,
    private accountService: Customer_accountService,
    private router: Router,
    private restaurantStore: RestaurantStore
  ) {
    const storedCustomerString: string | null = localStorage.getItem('customer');
    if (!!storedCustomerString) {
      const customer: Customer = JSON.parse(storedCustomerString);
      this.accountService.verifyAccount(customer.id).pipe(take(1)).subscribe(verified => {
        if (!verified) {
          localStorage.setItem('customer', '');
          this.router.navigate(['']);
        }
      })
    } else {
      this.router.navigate(['']);
    }
    this.restaurantList = this.restaurantStore.getRestaurantMapChanges();
    this.restaurantList.pipe(takeUntil(this.onDestroyed$)).subscribe(restaurants => {
      if (restaurants.length > 0) {
        this.found.next(true);
      }
    })
  }

  ngOnInit(): void {
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['']);
  }
}
