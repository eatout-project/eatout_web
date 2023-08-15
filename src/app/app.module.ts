import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FrontpageComponent} from './pages/frontpage/frontpage_component/frontpage.component';
import {TopbarComponent} from './shared/topbar/topbar.component';
import {RestaurantCardComponent} from './pages/restaurantpage/restaurantCard/restaurant-card.component';
import {RestaurantpageComponent} from './pages/restaurantpage/restaurantpage_component/restaurantpage.component';
import {RouterModule} from "@angular/router";
import {MenuItemComponent} from './menu/menu-item/menu-item.component';
import {MenuItemCardComponent} from './menu/menu-item-card/menu-item-card.component';
import {HttpClientModule} from "@angular/common/http";
import {RestaurantSearchFacade} from "./restaurant_search/restaurant-search.facade";
import {ReservationPageComponent} from './pages/reservation/reservation-page/reservation-page.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatLegacyFormFieldModule as MatFormFieldModule} from "@angular/material/legacy-form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatIconModule} from "@angular/material/icon";
import {MatLegacyInputModule as MatInputModule} from "@angular/material/legacy-input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatLegacyButtonModule as MatButtonModule} from "@angular/material/legacy-button";
import {NzTimePickerModule} from 'ng-zorro-antd/time-picker';
import {da_DK, NZ_I18N} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import da from '@angular/common/locales/da';
import {StatusPageComponent} from './pages/status-page/status-page.component';
import {ReservationFacade} from "./pages/reservation/reservation.facade";
import {LoginComponent} from './pages/account/LoginPage/login/login.component';
import {CreateAccountComponent} from './pages/account/create-account/create-account.component';

registerLocaleData(da);

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    TopbarComponent,
    RestaurantCardComponent,
    RestaurantpageComponent,
    MenuItemComponent,
    MenuItemCardComponent,
    ReservationPageComponent,
    StatusPageComponent,
    LoginComponent,
    CreateAccountComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'statuspage', component: StatusPageComponent},
      {path: 'restaurantpage', component: RestaurantpageComponent},
      {path: 'reservationpage', component: ReservationPageComponent},
      {path: 'frontPage', component: FrontpageComponent},
      {path: 'login', component: LoginComponent},
      {path: '', component: CreateAccountComponent},
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
    NzTimePickerModule
  ],
  providers: [
    RestaurantSearchFacade,
    ReservationFacade,
    { provide: NZ_I18N, useValue: da_DK }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
