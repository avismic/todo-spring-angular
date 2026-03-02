import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { WelcomeData } from '../service/data/welcome-data';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-welcome',
  imports: [RouterLink, NgIf],
  templateUrl: './welcome.html',
  standalone: true,
  styleUrl: './welcome.css',
})
export class Welcome implements OnInit {

  welcomeMessageFromService: string = '';
  getWelcomeMessage() {
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  getWelcomeMessageWithParameter() {
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessfulResponse(response: any) {
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error: any) {
    this.welcomeMessageFromService = error.error.message;
  }

  message: string = '';
  name: string = '';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly service: WelcomeData,
  ) {}

  ngOnInit() {
    this.name = this.route.snapshot.params['username'];
  }
}
