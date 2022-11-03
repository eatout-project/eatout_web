import {Injectable} from "@angular/core";
import {Observable, ReplaySubject} from "rxjs";
import {Customer} from "../businessObjects/Customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerStore {
  private customerMapSource = new ReplaySubject<Customer>(1);
  private customerMap$ = this.customerMapSource.asObservable();

  constructor() {
    this.refresh();
  }

  public refresh(): void {
    this.customerMapSource.next({name: 'henrik', id: 1})
  }

  public getCustomerMapChanges(): Observable<Customer> {
    return this.customerMap$;
  }
}
