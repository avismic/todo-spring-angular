import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-welcome',
  imports: [RouterLink, NgIf],
  templateUrl: './welcome.html',
  standalone: true,
  styleUrl: './welcome.css',
})
export class Welcome {
  message: string = 'Welcome to Angular!';
  name: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.name = this.route.snapshot.params['username'];
  }
}
