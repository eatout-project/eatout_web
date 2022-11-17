import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RestaurantpageComponent} from "./pages/restaurantpage/restaurantpage_component/restaurantpage.component";
import {FrontpageComponent} from "./pages/frontpage/frontpage_component/frontpage.component";
import {ReservationPageComponent} from "./pages/reservation/reservation-page/reservation-page.component";
import {StatusPageComponent} from "./pages/status-page/status-page.component";

const routes: Routes = [
  { path: '', component: FrontpageComponent },
  { path: 'restaurantpage', component: RestaurantpageComponent },
  { path: 'reservationpage', component: ReservationPageComponent },
  { path: 'statuspage', component: StatusPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
