import {Injectable} from "@angular/core";
import {EatoutHttpClient} from "../../../services/eatout-http-client";
import {map, Observable, take} from "rxjs";
import {CreateAccountFormObject} from "../create-account/create-account.component";
import {Customer} from "../../../objects/businessObjects/Customer";
import {LoginData} from "../LoginPage/login/login.component";

@Injectable({
  providedIn: 'root'
})
export class AccountApi {
  port = 5004;
  constructor(private readonly eatoutHttpClientService: EatoutHttpClient) {}

  createAccount(customer: CreateAccountFormObject): Observable<Customer> {
    return this.eatoutHttpClientService.post<Customer>(`${this.port}/create-account`, customer)
      .pipe(take(1), map((result) => result));
  }

  login(formData: LoginData) {
    return this.eatoutHttpClientService.post<Customer>(`${this.port}/login`, formData)
      .pipe(take(1), map(result => result));
  }

  verifyAccount(customerId: number) {
    const body = {
      id: customerId
    }
    return this.eatoutHttpClientService.post<boolean>(`${this.port}/verifyAccount`, body);
  }
}
