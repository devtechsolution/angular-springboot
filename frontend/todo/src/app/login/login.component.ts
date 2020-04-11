import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

  handleLogin() {
    // console.log(this.username);
    if (this.username === 'devtechsolution' && this.password === 'Rama') {
      this.invalidLogin = false ;
    } else {
      this.invalidLogin = true ;
    }
  }

}
