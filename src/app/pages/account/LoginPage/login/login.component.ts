import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {take} from "rxjs";
import {Customer_accountService} from "../../customer_account.service";
import {CustomerStore} from "../../../../stores/customer-store";

export interface LoginData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private accountService: Customer_accountService,
    private customerStore: CustomerStore
  ){}

  loginData = this.formBuilder.group({
    email: [''],
    password: ['']
  });

  ngOnInit(): void {
  }

  onSubmit() {
    const loginFormObject: LoginData = {
      email: this.loginData.controls.email.value || '',
      password: this.loginData.controls.password.value ||''
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

  goToRegister(): void {
    this.router.navigate([""]);
  }

  goToFrontpage(): void {
    this.router.navigate([""]);
  }
}
