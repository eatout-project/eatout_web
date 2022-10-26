import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RestaurantpageComponent} from "./restaurantpage/restaurantpage_component/restaurantpage.component";
import {FrontpageComponent} from "./frontpage/frontpage_component/frontpage.component";

const routes: Routes = [
  { path: 'restaurantpage', component: RestaurantpageComponent },
  { path: '', component: FrontpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
