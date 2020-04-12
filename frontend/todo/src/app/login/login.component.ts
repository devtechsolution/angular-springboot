import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'devtechsolution';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false ;

  //  Router
  //  Angular.giveMeRouter
  //  Dependency Injection which is in-built feature in Angular.
  /*  Here Router is a dependency.
      So to get this dependency we have to paas it in constructor as an argument.
      In TypeScript whenever we pass a parameter to Constructor, 
      that parameter would be available as a member variable 
  */

  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleLogin() {
    // console.log(this.username);
    if (this.username === 'devtechsolution' && this.password === 'Rama') {
      //  Redirect to Welcome Page using navigate() method of Router.
      //  navigate() method help us to route to a specific page.
      //  navigate() method accept an array and the first element inside this array 
      //  the page we want to navigate. We can pass parameter along with router.
      this.router.navigate(['welcome', this.username]);

      this.invalidLogin = false ;
    } else {
      this.invalidLogin = true ;
    }
  }

}
