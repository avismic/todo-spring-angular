import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { HardcodedAuthentication } from '../service/hardcoded-authentication';

@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf],
  templateUrl: './login.html',
  styleUrl: './login.css',
})

export class Login {
  username : string = 'avismic';
  password : string = '12345';
  errorMessage : string = 'Invalid username or password!';
  invalidLogin : boolean = false;

  constructor( private router: Router, private hardcodedAuthentication: HardcodedAuthentication) {
  }

  handleLogin() {
    console.log('Login button clicked!');
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    if (this.hardcodedAuthentication.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

}
