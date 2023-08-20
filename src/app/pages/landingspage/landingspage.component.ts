import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {Customer} from "../../objects/businessObjects/Customer";
import {take} from "rxjs";
import {Customer_accountService} from "./customer_account.service";
import {CustomerStore} from "../../stores/customer-store";

import {CreateAccountFormObject, LoginData} from "../../objects/businessObjects/AccountForms";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-landingspage',
  templateUrl: './landingspage.component.html',
  styleUrls: ['./landingspage.component.scss'],
})
export class LandingspageComponent implements OnInit {

  newProfileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    new_email: new FormControl(''),
    phone: new FormControl(''),
    password: new FormControl('')
  });

  signInForm = new FormGroup({
    signin_email: new FormControl(''),
    password: new FormControl('')
  })

  addressForm = new FormGroup({
    address: new FormControl('')
  })

  displaySignInForm = true;

  constructor(private router: Router,
              private accountService: Customer_accountService,
              private customerStore: CustomerStore) {
  }
  ngOnInit(): void {

    console.log(environment.CUSTOMER_SERVICE_HOST_URL)

    const storedCustomerString: string | null = localStorage.getItem('customer');
    if (!!storedCustomerString) {
      const customer: Customer = JSON.parse(storedCustomerString);
      this.accountService.verifyAccount(customer.id).pipe(take(1)).subscribe(verified => {
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

  openLoginDialog() {
    // open login dialog
    console.log("working")
  }

  postRegister() {
    const createAccountFormObject: CreateAccountFormObject = {
      firstName: this.newProfileForm.controls.firstName.value || '',
      lastName: this.newProfileForm.controls.lastName.value || '',
      email: this.newProfileForm.controls.new_email.value || '',
      phone: this.newProfileForm.controls.phone.value || '',
      password: this.newProfileForm.controls.password.value ||''
    }

    const {email, password, firstName, lastName} = createAccountFormObject;

    if (!email || !password || !firstName || !lastName){
      return alert('Empty fields');
    }

    this.accountService.createAccount(createAccountFormObject).pipe(take(1))
      .subscribe(customer => {
        if (!customer.id) {
          return alert('Something went wrong');
        }
        this.customerStore.storeCustomer(customer);
        this.router.navigate(["/frontPage"]);
      })

  }

  postLogin() {
    const loginFormObject: LoginData = {
      email: this.signInForm.controls.signin_email.value || '',
      password: this.signInForm.controls.password.value ||''
    }

    const {email, password} = loginFormObject;

    if (!email || !password){
      return alert('Empty fields');
    }

    this.accountService.login(loginFormObject).pipe(take(1))
      .subscribe(customer => {
        if (!customer.id) {
          return alert('Internal server error');
        }
        this.customerStore.storeCustomer(customer);
        this.router.navigate(["/frontPage"]);
      })
  }

  showLoginForm() {
    this.displaySignInForm = false;
  }

  showSignInForm() {
    this.displaySignInForm = true;
  }
}
