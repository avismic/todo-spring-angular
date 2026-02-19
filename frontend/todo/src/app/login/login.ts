import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

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

  constructor( private router: Router) {

  }

  handleLogin() {
    console.log('Login button clicked!');
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    if (this.username === 'avismic' && this.password === '12345') {
      this.router.navigate(['welcome/', this.username]);
      this.invalidLogin = false;
      //alert('Login successful!');
      //redirect to welcome page
      // window.location.href = '/welcome';
    } else {
      this.invalidLogin = true;
    }
  }

}
