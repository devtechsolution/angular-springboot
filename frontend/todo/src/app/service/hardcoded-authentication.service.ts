import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password){
    console.log( 'Before: ' + this.isUserLoggedIn());
    if (username === 'devtechsolution' && password === 'Rama') {
      sessionStorage.setItem('authenticateUser', username);
      console.log( 'After: ' + this.isUserLoggedIn());
      return true;
    }
    return false;

  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('authenticateUser')
    return !(user === null );
  }
}
