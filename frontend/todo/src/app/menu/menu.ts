import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HardcodedAuthentication } from '../service/hardcoded-authentication';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [RouterLink, NgIf],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  // isUserLoggedIn: boolean = false;

  constructor(public hardcodedAuthentication: HardcodedAuthentication) {}

  ngOnInit() {
    //this.isUserLoggedIn = this.hardcodedAuthentication.isUserLoggedIn();
  }
}
