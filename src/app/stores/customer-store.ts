import {Injectable} from "@angular/core";
import {Customer} from "../objects/businessObjects/Customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerStore {
  constructor() {
  }

  public storeCustomer(customer: Customer): void {
    console.log('setting customer: ', customer);
    localStorage.setItem('customer', JSON.stringify(customer));
  }

  public getCustomerMapChanges(): Customer | undefined {
    const storedCustomerString: string | null = localStorage.getItem('customer');
    if (!!storedCustomerString) {
      const customer: Customer = JSON.parse(storedCustomerString);
      console.log(customer);
      return customer;
    }
    return undefined;
  }
}
