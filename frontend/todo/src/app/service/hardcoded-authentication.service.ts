import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password){

    if (username === 'devtechsolution' && password === 'Rama') {
      return true;
    }
    return false;

  }
}
