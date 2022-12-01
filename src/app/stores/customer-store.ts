import {Injectable} from "@angular/core";
import {Customer} from "../objects/businessObjects/Customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerStore {
  constructor() {
  }

  public storeCustomer(customer: Customer): void {
    localStorage.setItem('customer', JSON.stringify(customer));
  }

  public getCustomerMapChanges(): Customer | undefined {
    const storedCustomerString: string | null = localStorage.getItem('customer');
    if (!!storedCustomerString) {
      return JSON.parse(storedCustomerString);
    }
    return undefined;
  }
}
