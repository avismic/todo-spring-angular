import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

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

  handleLogin() {
    console.log('Login button clicked!');
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    if (this.username === 'avismic' && this.password === '12345') {
      this.invalidLogin = false;
      //alert('Login successful!');
      //redirect to welcome page
      window.location.href = '/welcome';
    } else {
      this.invalidLogin = true;
    }
  }

}
