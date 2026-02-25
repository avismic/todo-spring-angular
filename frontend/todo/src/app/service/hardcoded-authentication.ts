import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HardcodedAuthentication {

  constructor(){

  }

  authenticate(username: string, password: string) {
    //console.log('before', this.isUserLoggedIn());
    if (username === 'avismic' && password === '12345') {
      sessionStorage.setItem('authenticatedUser', username);
      //console.log('after', this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
  }

}
