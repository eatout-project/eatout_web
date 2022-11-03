import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RestaurantpageComponent} from "./restaurantpage/restaurantpage_component/restaurantpage.component";
import {FrontpageComponent} from "./frontpage/frontpage_component/frontpage.component";
import {ReservationPageComponent} from "./reservation-page/reservation-page.component";

const routes: Routes = [
  { path: '', component: FrontpageComponent },
  { path: 'restaurantpage', component: RestaurantpageComponent },
  { path: 'reservationpage', component: ReservationPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
