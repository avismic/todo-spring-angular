import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HardcodedAuthentication } from '../service/hardcoded-authentication';

@Component({
  selector: 'app-logout',
  imports: [RouterLink],
  templateUrl: './logout.html',
  styleUrl: './logout.css',
})
export class Logout {

  constructor(public hardcodedAuthentication: HardcodedAuthentication) {}

  ngOnInit() {
    this.hardcodedAuthentication.logout();
  }

}
