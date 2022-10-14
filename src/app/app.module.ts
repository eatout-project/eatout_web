import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontpageComponent } from './pages/frontpage/frontpage.component';
import { FrontpageTopbarComponent } from './components/frontpage_components/frontpage-topbar/frontpage-topbar.component';
import { FrontpageMainComponent } from './components/frontpage_components/frontpage-main/frontpage-main.component';
import { FrontpageMainTopicSelectorComponent } from './components/frontpage_components/frontpage-main-topic-selector/frontpage-main-topic-selector.component';
import { FrontpageMainBrowsingComponent } from './frontpage-main-browsing/frontpage-main-browsing.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { ButtonComponent } from './button/button.component';
import { RestaurantpageComponent } from './restaurantpage/restaurantpage.component';
import {RouterModule} from "@angular/router";
import { MainnavbarComponent } from './mainnavbar/mainnavbar.component';
import { RestaurantbannerComponent } from './restaurantbanner/restaurantbanner.component';
import { RestaurantDescriptionAreaComponent } from './restaurant-description-area/restaurant-description-area.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuItemCardComponent } from './menu-item-card/menu-item-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    FrontpageTopbarComponent,
    FrontpageMainComponent,
    FrontpageMainTopicSelectorComponent,
    FrontpageMainBrowsingComponent,
    RestaurantComponent,
    ButtonComponent,
    RestaurantpageComponent,
    MainnavbarComponent,
    RestaurantbannerComponent,
    RestaurantDescriptionAreaComponent,
    MenuItemComponent,
    MenuItemCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: FrontpageComponent },
      { path: 'restaurantpage', component: RestaurantpageComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
