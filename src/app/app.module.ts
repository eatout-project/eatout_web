import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FrontpageComponent} from './frontpage/frontpage_component/frontpage.component';
import {TopbarComponent} from './shared/topbar/topbar.component';
import {RestaurantCardComponent} from './restaurantpage/restaurantCard/restaurant-card.component';
import {RestaurantpageComponent} from './restaurantpage/restaurantpage_component/restaurantpage.component';
import {RouterModule} from "@angular/router";
import {MenuItemComponent} from './menu/menu-item/menu-item.component';
import {MenuItemCardComponent} from './menu/menu-item-card/menu-item-card.component';
import {HttpClientModule} from "@angular/common/http";
import {RestaurantSearchFacade} from "./restaurant_search/restaurant-search.facade";
import {ReservationPageComponent} from './reservation-page/reservation-page.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {NgxMatTimepickerModule} from 'ngx-mat-timepicker';

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    TopbarComponent,
    RestaurantCardComponent,
    RestaurantpageComponent,
    MenuItemComponent,
    MenuItemCardComponent,
    ReservationPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'restaurantpage', component: RestaurantpageComponent},
      {path: 'reservationpage', component: ReservationPageComponent},
      {path: '', component: FrontpageComponent},
    ]),
    HttpClientModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    NgxMatTimepickerModule.setLocale('da-DK')
  ],
  providers: [
    RestaurantSearchFacade
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }