import {Injectable} from "@angular/core";
import {EatoutHttpClient} from "../../../services/eatout-http-client";
import {map, Observable, take} from "rxjs";
import {CreateAccountFormObject} from "../create-account/create-account.component";
import {Customer} from "../../../objects/businessObjects/Customer";
import {LoginData} from "../LoginPage/login/login.component";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AccountApi {
  url: string = environment.CUSTOMER_SERVICE_HOST_URL;
  constructor(private readonly eatoutHttpClientService: EatoutHttpClient) {}

  createAccount(customer: CreateAccountFormObject): Observable<Customer> {
    return this.eatoutHttpClientService.post<Customer>(this.url + '/create-account', customer)
      .pipe(take(1), map((result) => result));
  }

  login(formData: LoginData) {
    return this.eatoutHttpClientService.post<Customer>(this.url + `/login`, formData)
      .pipe(take(1), map(result => result));
  }

  verifyAccount(customerId: number) {
    const body = {
      id: customerId
    }
    return this.eatoutHttpClientService.post<boolean>(this.url + `/verifyAccount`, body);
  }
}
