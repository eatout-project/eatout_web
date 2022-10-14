import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RestaurantpageComponent} from "./restaurantpage/restaurantpage.component";
import {FrontpageComponent} from "./pages/frontpage/frontpage.component";

const routes: Routes = [
  { path: 'restaurantpage', component: RestaurantpageComponent },
  { path: '', component: FrontpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
