import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HelloWorld {
  constructor(private http: HttpClient) {}

  getHelloMessage() {
    return this.http.get('http://localhost:8080/hello-world', { responseType: 'text' });
  }
}
