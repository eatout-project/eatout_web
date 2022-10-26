import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FrontpageComponent} from './frontpage/frontpage_component/frontpage.component';
import {TopbarComponent} from './shared/topbar/topbar.component';
import {RestaurantComponent} from './restaurantpage/restaurant/restaurant.component';
import {ButtonComponent} from './ui-components/button/button.component';
import {RestaurantpageComponent} from './restaurantpage/restaurantpage_component/restaurantpage.component';
import {RouterModule} from "@angular/router";
import {MenuItemComponent} from './menu/menu-item/menu-item.component';
import {MenuItemCardComponent} from './menu/menu-item-card/menu-item-card.component';
import {HttpClientModule} from "@angular/common/http";
import {RestaurantSearchFacade} from "./restaurant_search/restaurant-search.facade";

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    TopbarComponent,
    RestaurantComponent,
    ButtonComponent,
    RestaurantpageComponent,
    MenuItemComponent,
    MenuItemCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: FrontpageComponent },
      { path: 'restaurantpage', component: RestaurantpageComponent },
    ]),
    HttpClientModule,
  ],
  providers: [
    RestaurantSearchFacade
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
