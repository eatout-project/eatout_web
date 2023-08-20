import {AccountApi} from "./api/account-api.service";
import {Observable} from "rxjs";
import {Customer} from "../../objects/businessObjects/Customer";
import {Injectable} from "@angular/core";
import {CreateAccountFormObject, LoginData} from "../../objects/businessObjects/AccountForms";

@Injectable({
  providedIn: 'root'
})
export class Customer_accountService {
  constructor(private api: AccountApi) {
  }

  createAccount(formData: CreateAccountFormObject): Observable<Customer> {
    return this.api.createAccount(formData);
  }

  login(formData: LoginData): Observable<Customer> {
    return this.api.login(formData);
  }

  verifyAccount(customerId: number): Observable<boolean> {
    return this.api.verifyAccount(customerId);
  }
}
