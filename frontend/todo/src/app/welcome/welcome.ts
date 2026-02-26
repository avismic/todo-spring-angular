import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { HelloWorld } from '../service/hello-world';

@Component({
  selector: 'app-welcome',
  imports: [RouterLink, NgIf],
  templateUrl: './welcome.html',
  standalone: true,
  styleUrl: './welcome.css',
})
export class Welcome {
  message: string = '';
  name: string = '';

  constructor(private route: ActivatedRoute, private helloWorld: HelloWorld) {}

  ngOnInit() {
    this.name = this.route.snapshot.params['username'];

    this.helloWorld.getHelloMessage().subscribe((response) => {
      this.message = response;
    });
  }
}
