import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {Customer_accountService} from "../customer_account.service";
import {take} from "rxjs";
import {CustomerStore} from "../../../stores/customer-store";
import {Customer} from "../../../objects/businessObjects/Customer";

export interface CreateAccountFormObject {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  accountData = this.formBuilder.group({
    email: [''],
    password: [''],
    firstName: [''],
    lastName: ['']
  })

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private accountService: Customer_accountService,
    private customerStore: CustomerStore
  ) {
    const storedCustomerString: string | null = localStorage.getItem('customer');
    console.log('testing: ', storedCustomerString)
    if (!!storedCustomerString) {
      const customer: Customer = JSON.parse(storedCustomerString);
      this.accountService.verifyAccount(customer.id).pipe(take(1)).subscribe(verified => {
        console.log('verified: ', verified);
        if (verified) {
          this.router.navigate(
            ['/frontPage']
          )
        } else {
          localStorage.setItem('customer', '');
        }
      })
    }
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const createAccountFormObject: CreateAccountFormObject = {
      email: this.accountData.controls.email.value || '',
      password: this.accountData.controls.password.value ||'',
      firstName: this.accountData.controls.firstName.value || '',
      lastName: this.accountData.controls.lastName.value || ''
    }

    const {email, password, firstName, lastName} = createAccountFormObject;

    if (!email || !password || !firstName || !lastName){
      return alert('Empty fields');
    }

    this.accountService.createAccount(createAccountFormObject).pipe(take(1))
      .subscribe(customer => {
        if (!customer.id) {
          return alert('Internal server error');
        }
        this.customerStore.storeCustomer(customer);
        this.router.navigate(["/frontPage"]);
      })
  }

  goToLogin(): void {
    this.router.navigate(["login"]);
  }

  goToFrontpage(): void {
    this.router.navigate([""]);
  }
}
